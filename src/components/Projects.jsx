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

  return (
    <div className="scroll-mt-28 border-b border-neutral-900 pb-4" id="projects" ref={ref}>
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
        className="mx-auto flex max-w-5xl flex-col gap-6"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex flex-col items-center gap-6 rounded-2xl border border-neutral-800 p-6 transition-colors duration-300 hover:border-purple-900/60 lg:gap-10 lg:p-8 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="w-full flex-shrink-0 lg:w-2/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg object-cover shadow-lg"
              />
            </div>

            <div className="w-full lg:w-3/5">
              <h6 className="mb-2 text-center font-semibold text-lg lg:text-left">
                {project.title}
              </h6>
              <p className="mb-4 text-center leading-relaxed text-neutral-400 lg:text-left">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
