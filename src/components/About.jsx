import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Changed from true to false
    threshold: 0.3,
  });

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="border-b border-neutral-900 pb-4" id="about" ref={ref}>
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-purple-500">Me</span>
      </motion.h2>

      {/* Content Container */}
      <div className="flex flex-wrap items-center justify-center lg:justify-between">
        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full lg:w-1/2 p-4 lg:p-8 flex justify-center"
        >
          <img
            className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-md h-auto object-cover"
            src={aboutImg}
            alt="About Me"
            style={{ maxHeight: "550px" }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full lg:w-1/2 p-4 lg:p-8"
        >
          <p className="my-2 max-w-xl py-6 text-neutral-300 leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
