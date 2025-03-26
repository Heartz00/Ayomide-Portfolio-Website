import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROJECTS } from "../constants";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="border-b border-neutral-900 pb-4" ref={ref}>
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mx-auto max-w-6xl" // Added container width constraint
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-8 flex flex-col items-center gap-4 py-4 lg:flex-row lg:justify-center" // Modified layout classes
          >
            <motion.div
              variants={imageVariants}
              className="flex-shrink-0" // Prevent image from stretching
            >
              <img
                src={project.image}
                width={300} // Increased base size
                height={300}
                alt={project.title}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover"
              />
            </motion.div>

            <motion.div
              variants={contentVariants}
              className="w-full lg:max-w-2xl lg:px-8" // Added padding and max-width
            >
              <h6 className="mb-2 text-center lg:text-left font-semibold text-lg">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400 leading-relaxed text-center lg:text-left">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-400 hover:bg-purple-900/20 transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
