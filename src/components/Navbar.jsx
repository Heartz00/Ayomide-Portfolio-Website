import { useEffect, useState } from "react";
import logo from "../assets/AyomideLogo.png";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 -mx-8 mb-20 border-b border-neutral-900 bg-neutral-950/70 px-8 backdrop-blur-md">
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                active === id
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-4 text-2xl lg:flex">
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

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="text-2xl text-gray-300 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 pb-4">
              {NAV_LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors duration-200 ${
                    active === id
                      ? "text-purple-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="mt-2 flex items-center gap-4 px-3 text-2xl">
                <a
                  href="https://www.linkedin.com/in/ayomide-oladele/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Heartz00?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#333] transition-colors duration-300"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
