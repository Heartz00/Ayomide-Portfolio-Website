import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PUBLICATIONS, EDUCATION, RECOGNITION, SELECTED_PROJECT } from "../constants";

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="scroll-mt-28 border-b border-neutral-900 pb-24" id="publications" ref={ref}>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        Publications
      </motion.h2>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mx-auto max-w-3xl"
      >
        <motion.div
          variants={itemVariants}
          className="mb-10 rounded-2xl border border-purple-900/40 p-6"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-purple-400">
            Selected Project
          </p>
          <h6 className="mb-2 font-semibold text-neutral-200">
            {SELECTED_PROJECT.title}
          </h6>
          <p className="mb-4 text-sm text-neutral-400">
            {SELECTED_PROJECT.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {SELECTED_PROJECT.technologies.map((tech, i) => (
              <span
                key={i}
                className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {PUBLICATIONS.map((pub, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-6 rounded-2xl border border-neutral-800 p-6"
          >
            <h6 className="mb-2 font-semibold text-neutral-200">
              {pub.title}
            </h6>
            <p className="text-sm text-neutral-400">{pub.venue}</p>
          </motion.div>
        ))}

        <motion.p
          variants={itemVariants}
          className="mb-12 text-center text-sm text-neutral-500"
        >
          Two further peer-reviewed publications in reproducible methodology
          and computational chemistry.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 text-center text-neutral-400"
        >
          <p>
            <span className="font-semibold text-neutral-200">
              {EDUCATION.degree}
            </span>{" "}
            · {EDUCATION.school} · {EDUCATION.year}
          </p>
          {RECOGNITION.map((item, index) => (
            <p key={index}>
              {item.text} · {item.year}
            </p>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Publications;
