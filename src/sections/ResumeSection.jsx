import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FaDownload, FaCertificate, FaTimes, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { RiFolderOpenLine } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { experiences, education, certifications, projects } from "../data/experiences";

const ResumeSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <section id="resume" className="bg-[#0b1a3b] text-white py-16 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Resume Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-blue-300 mb-6 flex items-center justify-center gap-2"
        >
          <FaFileAlt /> Resume
        </motion.h2>

        {/* Download Button */}
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

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Experience */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
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
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
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

        {/* Projects */}
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
            {projects.map((proj, idx) => (
              <div
                key={idx}
                onClick={() => openModal(proj)}
                className="bg-[#0f172a] border border-gray-600 px-6 py-4 rounded-md shadow-md text-left max-w-sm w-full cursor-pointer hover:border-blue-500 transition"
              >
                <h4 className="text-lg font-semibold text-blue-400">{proj.title}</h4>
                <p className="text-gray-300">{proj.description}</p>
                <p className="text-gray-500 text-sm">{proj.tags}</p>
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
                onClick={() => openModal(cert)}
                className="bg-[#0f172a] border border-gray-600 px-6 py-4 rounded-md shadow-md text-left max-w-sm w-full cursor-pointer hover:border-blue-500 transition"
              >
                <h4 className="text-lg font-semibold text-blue-400">{cert.title}</h4>
                <p className="text-gray-300 italic">{cert.organization}</p>
                <p className="text-gray-300">{cert.description}</p>
                <p className="text-gray-500 text-sm">{cert.tags}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="relative w-full max-w-3xl p-6 rounded-2xl shadow-lg border animate-glow"
              style={{
                background: "rgba(15, 23, 42, 0.7)", // transparent dark blue
                backdropFilter: "blur(12px)", // glass effect
                WebkitBackdropFilter: "blur(12px)", // safari support
                borderImage: "linear-gradient(90deg, rgba(59,130,246,0.8), rgba(147,197,253,0.8)) 1",
              }}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-300 hover:text-red-500 text-xl"
              >
                <FaTimes />
              </button>
              {/* Image */}
              {selectedItem.image && (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-64 object-cover rounded-lg border border-gray-600 mb-4"
                />
              )}
              {/* Title */}
              <h2 className="text-2xl font-bold text-blue-400 mb-2 border-b border-gray-700 pb-2">
                {selectedItem.title}
              </h2>
              {/* Organization */}
              {selectedItem.organization && (
                <p className="text-gray-300 italic mb-2">{selectedItem.organization}</p>
              )}
              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">{selectedItem.description}</p>
              {/* Tags */}
              {selectedItem.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {(Array.isArray(selectedItem.tags) ? selectedItem.tags : selectedItem.tags.split(",")).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-600/80 hover:bg-blue-600 transition px-3 py-1 rounded-full text-sm border border-blue-400/40"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
              {/* Links */}
              <div className="flex gap-4 mt-4">
                {selectedItem.demo && (
                  <a
                    href={selectedItem.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded flex items-center gap-2 border border-blue-400/50 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {selectedItem.code && (
                  <a
                    href={selectedItem.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded flex items-center gap-2 border border-gray-600 transition"
                  >
                    <FaCode /> View Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default ResumeSection;
