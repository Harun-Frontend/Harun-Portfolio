import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

 const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  return (
    <div className="w-full flex justify-center fixed top-6 z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-[90%] max-w-7xl backdrop-blur-xl bg-black/30 border border-white/20 shadow-xl rounded-2xl px-8 py-4"
      >
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-[linear-gradient(90deg,#ef4444,#f59e0b)] text-white font-bold px-3 py-1 rounded-lg">
              HK
            </div>
            <h1 className="text-white text-xl font-semibold">
              Harun Khan
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-white text-lg font-medium">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                onClick={() => scrollToSection(link.id)}
                className="cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Button */}
          <div className="md:hidden text-white">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 flex flex-col gap-4 text-white text-lg"
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  scrollToSection(link.id);
                  setMenuOpen(false);
                }}
              >
                {link.name}
              </li>
            ))}
          </motion.ul>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;