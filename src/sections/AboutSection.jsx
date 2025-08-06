import React from 'react';
import { motion } from 'framer-motion';
import { CgProfile } from 'react-icons/cg';
import ParticlesBg from "particles-bg"; // Optional: for background animation

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center text-white bg-[#0b1a3b] overflow-hidden px-4"
    >
      {/* Optional Background Particles */}
      <ParticlesBg type="cobweb" bg={true} color="#3b82f6" num={80} />

      {/* About Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-semibold text-blue-300 mb-6 flex items-center justify-center gap-2">
          <CgProfile /> About Me
        </h3>

        <p className="text-lg md:text-xl leading-relaxed font-serif text-gray-200">
          I’m a dedicated <span className="text-blue-700 font-semibold">MERN Stack Developer</span> and <span className="text-blue-400 font-semibold">Data Analyst</span> with a passion for building modern, scalable web applications and transforming raw data into meaningful insights.
          I specialize in creating seamless user experiences with <span className="text-blue-700 font-semibold">React, Node.js, MongoDB, Express.js some other Libraries and AI Tools</span>,while also leveraging data analysis tools like 
          <span className="text-blue-400 font-semibold">Python, Pandas, Numpy, Matplotlib, Seaborn, Power BI, SQL&NoSQL and Excel</span> to uncover trends, patterns, and actionable business intelligence.
        </p>


        <p className="mt-4 text-gray-400 text-lg italic">
          “Turning ideas into interactive and data-driven digital products is my superpower.”
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {[
            "Python",
            "Pandas",
            "Numpy",
            "Matplotlib",
            "Power BI",
            "Excel",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "React.js",
            "Node.js",
            "Express.js",
            "SQL / NoSQL",
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-blue-700/80 text-white px-4 py-2 rounded-full text-sm border border-blue-500 hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
