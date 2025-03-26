import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiPostgresql, SiPython, SiMysql } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techIcons = [
    { Icon: RiReactjsLine, color: "text-cyan-400" },
    { Icon: TbBrandNextjs, color: "text-white" },
    { Icon: SiMongodb, color: "text-green-500" },
    { Icon: FaNodeJs, color: "text-green-400" },
    { Icon: DiRedis, color: "text-red-500" },
    { Icon: SiPostgresql, color: "text-blue-500" },
    { Icon: SiPython, color: "text-yellow-400" },
    { Icon: SiMysql, color: "text-blue-600" },
  ];

  // Slide in from right animation
  const slideInVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Floating animation
  const floatVariants = {
    animate: {
      y: ["0%", "-15%", "0%", "10%", "0%"],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        delay: 0.8, // Start after slide-in completes
      },
    },
  };

  return (
    <div className="border-b border-neutral-800 pb-24" ref={ref}>
      <h2 className="my-20 text-center text-4xl">Technologies</h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {techIcons.map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-6"
            initial="hidden"
            animate={inView ? ["visible", "animate"] : "hidden"}
            variants={{
              ...slideInVariants,
              animate: floatVariants.animate,
            }}
            transition={{
              ...slideInVariants.transition,
              delay: index * 0.1,
              ...floatVariants.transition,
            }}
          >
            <motion.div
              animate={{
                y: ["0%", "15%", "0%", "-10%", "0%"],
                transition: {
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.8 + index * 0.05,
                },
              }}
            >
              <Icon className={`text-7xl ${color}`} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
