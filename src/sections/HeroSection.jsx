import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import animationData from '../assets/heroAnimation.json';
import Profile from '../assets/profile.png';
import { FaChevronDown } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section
      id='hero'
      className="relative w-full h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-[#0f172a] to-[#1e293b] overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Player autoplay loop src={animationData} style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={Profile}
          alt="Profile"
          className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-blue-500 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Hi, I'm <span className="text-blue-400">Sanjay Chaurasiya</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-xl md:text-2xl text-blue-300 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Typewriter
            words={['MERN Stack Developer.', 'Data Analyst.', 'React Enthusiast.', 'Creative Coder.']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-blue-400 hover:bg-blue-600 hover:text-white text-blue-400 px-6 py-3 rounded-lg transition"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-6 z-10 text-blue-400 animate-bounce cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <FaChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
