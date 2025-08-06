import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Typewriter } from 'react-simple-typewriter';
import { FaChevronDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { AnimatePresence, motion } from 'framer-motion';
import animationData from '../assets/heroAnimation1.json';
import Profile from '../assets/profile.png';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id='hero'
      className="w-full h-screen flex flex-col items-center justify-center text-white bg-[#0b1a3b] relative overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        className="absolute inset-0 z-0"
        init={async (main) => await loadFull(main)}
        options={{
          background: { color: "#0b1a3b" },
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
              color: "#00bfff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1.5 },
            number: { value: 40, density: { enable: true, area: 800 } },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Lottie Animation (Optional or Replace with Particle only) */}
      <div className="fixed z-0 opacity-30 pointer-events-none">
        <Player autoplay loop src={animationData} style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <motion.img
          src={Profile}
          alt="Profile"
          className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-blue-500 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
        />

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Hi, I'm <span className="text-blue-400">Sanjay Chaurasiya</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-2 text-lg md:text-xl text-blue-200 font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          I turn data into decisions and ideas into applications.
        </motion.p>

        {/* Typewriter */}
        <motion.p
          className="mt-2 text-xl md:text-2xl text-blue-300 font-medium font-serif"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Typewriter
            words={['MERN Stack Developer.', 'Data Analyst.', 'React Enthusiast.', 'Creative Coder.']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex justify-center flex-wrap gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </button>
          <button
            className="border border-blue-400 hover:bg-blue-600 hover:text-white text-blue-400 px-6 py-3 rounded-lg transition"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </button>
          <a
            href="/resume.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
          >
            Download Resume
          </a>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition"
            onClick={() => setShowModal(true)}
          >
            Hire Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-6 flex justify-center gap-6 text-blue-300 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a href="https://github.com/sanjay2449" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-white transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/sanjay-chourasiya-02393025a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-white transition duration-300" />
          </a>
          <a href="mailto:sanjaychourasiyadmo240999@gmail.com" aria-label="Email">
            <FaEnvelope className="hover:text-white transition duration-300" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-6 z-10 text-blue-400 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown size={28} />
        </motion.div>
      </motion.div>

      {/* Hire Me Modal */}
      <AnimatePresence>
  {showModal && (
    <motion.div
      key="modal"
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setShowModal(false)}
      />

      {/* Modal Content */}
      <motion.div
        className="bg-[#0b1a3b] rounded-xl p-6 max-w-md w-full text-white relative z-10 shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <button
          className="absolute top-2 right-3 text-gray-600 text-2xl font-bold hover:text-red-500 transition"
          onClick={() => setShowModal(false)}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Let's Work Together!</h2>
        <p className="mb-6 text-center">
          I'm available for freelance, full-time, or part-time roles.
          <br /> Let's connect and build something great!
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:sanjaychourasiyadmo240999@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default HeroSection;
