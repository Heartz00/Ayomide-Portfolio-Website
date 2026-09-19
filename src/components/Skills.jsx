import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "../constants";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="border-b border-neutral-900 pb-24" ref={ref}>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SKILLS.map((group, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="rounded-2xl border border-neutral-800 p-6"
          >
            <h6 className="mb-3 font-semibold text-purple-300">
              {group.category}
            </h6>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <span
                  key={i}
                  className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
