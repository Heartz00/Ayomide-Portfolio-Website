import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="scroll-mt-28 border-b border-neutral-900 pb-4" id="experience" ref={ref}>
      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headerVariants}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div className="mx-auto max-w-3xl">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex items-stretch gap-4 lg:gap-6">
            <div className="hidden w-24 flex-shrink-0 pt-6 text-right lg:block">
              <p className="text-sm text-neutral-400">{experience.year}</p>
            </div>

            <div className="flex flex-shrink-0 flex-col items-center">
              <span className="mt-7 h-3 w-3 flex-shrink-0 rounded-full border-2 border-purple-500 bg-neutral-950" />
              {index !== EXPERIENCES.length - 1 && (
                <span className="w-px flex-1 bg-neutral-800" />
              )}
            </div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
              className="mb-10 flex-1 rounded-2xl border border-neutral-800 p-6"
            >
              <p className="mb-2 text-sm text-neutral-400 lg:hidden">
                {experience.year}
              </p>
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
