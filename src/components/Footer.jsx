// Footer.jsx or Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = () => {};

  return (
    <div className="relative">
      {/* Animated Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: { value: "#0f172a" }, // same as your background
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              directions: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 50,
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Footer Content */}
      <footer className="relative z-10 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-300 text-center pt-6 pb-4 px-4">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-xl mb-4">
          <a href="https://github.com/sanjay2449" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sanjay-chourasiya-02393025a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:sanjaychourasiyadmo240999@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © 2025 <strong className="text-sm text-white">Sanjay Chourasiya</strong>. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-gray-400">
          Made with ❤️ using React & TailwindCSS
        </p>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="z-50 animate-bounce absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all"
        >
          <FaArrowUp />
        </button>
      </footer>
    </div>
  );
};

export default Footer;
