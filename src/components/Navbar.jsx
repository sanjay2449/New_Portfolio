import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on mobile
    }
  };

  const navItems = [
    { label: "About", id: "#about" },
    { label: "Projects", id: "#projects" },
    { label: "Certificates", id: "#certificates" },
    // { label: "Resume", id: "#resume" },
    { label: "Contact", id: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => {
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-2xl font-bold text-blue-400 tracking-wider cursor-pointer">
          Sanjay Chourasiya
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-semibold">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-blue-400 transition-all cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b1a3b] px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left hover:text-blue-400 transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
