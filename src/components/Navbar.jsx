import logo from "../assets/AyomideLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/ayomide-oladele/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/Heartz00?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-[#333] transition-colors duration-300"
        >
          <FaGithub />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
