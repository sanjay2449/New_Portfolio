import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-300 text-center pt-6 pb-4 px-4 relative"
    >
      {/* Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-t"></div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        title="Back to Top"
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
      >
        <FaArrowUp />
      </button>

      {/* Optional Social Links */}
      <div className="flex justify-center gap-4 mb-1 text-xl text-white">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-blue-400 transition" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-400 transition" />
        </a>
        <a href="mailto:your@email.com">
          <FaEnvelope className="hover:text-blue-400 transition" />
        </a>
      </div>
      {/* Footer Content */}
      <p className="text-sm tracking-wide text-gray-400 mt-2">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Sanjay Chourasiya</span>. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
