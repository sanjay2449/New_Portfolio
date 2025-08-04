import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/heroAnimation1.json'; // Replace with your Lottie JSON
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center text-white bg-gradient-to-b from-[#0f172a] to-[#1e293b] overflow-hidden px-4"
    >
      {/* Lottie Background */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Player
          autoplay
          loop
          src={animationData}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* About Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-400">
          About Me
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          I’m a passionate <span className="text-blue-400">Full Stack Developer</span> and <span className="text-blue-400">Data Analyst</span> who loves building scalable web applications and uncovering valuable insights from data. I enjoy transforming ideas into real-world solutions with elegant and efficient code.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <span className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm">
            MERN Stack
          </span>
          <span className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm">
            REST APIs
          </span>
          <span className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm">
            SQL / NoSQL
          </span>
          <span className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm">
            Data Analysis
          </span>
          <span className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm">
            Python / Pandas
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
