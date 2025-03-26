import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CONTACT } from "../constants";

const Contact = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Check if CONTACT exists and has required properties
  if (!CONTACT || !CONTACT.phoneNo || !CONTACT.email) {
    return (
      <div className="border-b border-neutral-900 pb-20" id="contact" ref={ref}>
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="my-10 text-center text-4xl font-medium"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-neutral-400"
        >
          Contact information not available
        </motion.p>
      </div>
    );
  }

  return (
    <div className="border-b border-neutral-900 pb-20" id="contact" ref={ref}>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="my-10 text-center text-4xl font-medium"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center tracking-tight"
      >
        {CONTACT.address && (
          <motion.p variants={itemVariants} className="my-4 text-neutral-300">
            {CONTACT.address}
          </motion.p>
        )}

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 mt-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${CONTACT.phoneNo.replace(/\D/g, "")}`}
            className="my-4 hover:text-purple-400 transition-colors duration-200 text-lg"
            aria-label="Call me"
          >
            {CONTACT.phoneNo}
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${CONTACT.email}`}
            className="border-b border-purple-400 pb-1 hover:text-purple-400 transition-colors duration-200 text-lg"
            aria-label="Email me"
          >
            {CONTACT.email}
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
