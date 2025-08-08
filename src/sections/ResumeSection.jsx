import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaCertificate, FaTimes } from "react-icons/fa";
import { RiFolderOpenLine } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { experiences, education, certifications, projects } from "../data/experiences";

const ResumeSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="resume" className="bg-[#0b1a3b] text-white py-16 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-blue-300 mb-6 flex items-center justify-center gap-2"
        >
            <FaFileAlt /> Resume
        </motion.h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md shadow-md transition duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <FaDownload /> Download PDF
          </motion.a>

        </div>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">Experience</h3>
            <div className="space-y-5">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <p className="text-gray-300">{exp.company} | {exp.duration}</p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">Education</h3>
            <div className="space-y-5">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-gray-300">{edu.institution} | {edu.duration}</p>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="py-18 mt-20"
          id="projects"
        >
          <h3 className="text-3xl font-semibold text-blue-300 mb-6 mt-10 flex items-center justify-center gap-2">
            <RiFolderOpenLine /> Projects
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#0f172a] border border-gray-600 px-6 py-4 rounded-md shadow-md text-left max-w-sm w-full"
              >
                <h4 className="text-lg font-semibold text-blue-400">{cert.title}</h4>
                <p className="text-gray-300">{cert.description}</p>
                <p className="text-gray-500 text-sm">{cert.tags}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-18 mt-20"
          id="certificates"
        >
          <h3 className="text-3xl font-semibold text-blue-300 mb-6 mt-10 flex items-center justify-center gap-2">
            <FaCertificate /> Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#0f172a] border border-gray-600 px-6 py-4 rounded-md shadow-md text-left max-w-sm w-full"
              >
                <h4 className="text-lg font-semibold text-blue-400">{cert.title}</h4>
                <p className="text-gray-300">{cert.description}</p>
                <p className="text-gray-500 text-sm">{cert.tags}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Modal Preview */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResumeSection;
