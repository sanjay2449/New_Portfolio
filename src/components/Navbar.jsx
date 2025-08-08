import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // Set current active
      setMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "#about" },
    { label: "Resume", id: "#resume" },
    { label: "Projects", id: "#projects" },
    { label: "Certificates", id: "#certificates" },
    { label: "Reviews", id: "#reviews" },
    { label: "Contact", id: "#contact" },
  ];

  // Update active section based on scroll position (basic version)
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.id);
        if (section) {
          const offset = section.offsetTop - 100;
          const height = section.offsetHeight;
          if (window.scrollY >= offset && window.scrollY < offset + height) {
            setActiveSection(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0b1a3b]/60 border-b border-blue-900 text-white shadow-md font-serif"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => {
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-2xl font-bold text-blue-400 tracking-wider cursor-pointer"
        >
          Sanjay Chourasiya
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-semibold items-center">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className={`transition-all cursor-pointer hover:text-blue-400 ${
                activeSection === item.id ? "text-blue-400" : ""
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm shadow transition"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#0b1a3b] px-6 py-4 space-y-4"
          >
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left hover:text-blue-400 transition-all ${
                  activeSection === item.id ? "text-blue-400" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Resume link on mobile */}
            <a
              href="/resume.pdf"
              download
              className="inline-block w-full text-left text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm shadow transition"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
