import React, { useRef, useEffect, useState } from "react";
import projects from "../data/certificates"; // Make sure this file exports your 10 projects
import animationData from '../assets/heroAnimation1.json';
import { Player } from '@lottiefiles/react-lottie-player';

const ProjectSection = () => {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY < 0 ? -100 : 100 });
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      id="certificates"
      className="py-16 px-4 sm:px-8 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen overflow-hidden">
      {/* Background Lottie */}
      {/* <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Player autoplay loop src={animationData} style={{ width: '100%', height: '100%' }} />
      </div> */}

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-4xl font-bold mb-2 sticky top-0 z-20">Certificates</h2>
        <p className="text-lg text-gray-300">Some of my recent certificates showcasing skills and technologies.</p>
      </div>
      <div className="overflow-hidden relative z-10">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-2 scroll-smooth scrollbar-hide"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-[#0f172a]/70 border border-gray-600 rounded-xl shadow-md p-6 w-[320px] sm:w-[360px] flex-shrink-0 flex flex-col justify-between hover:bg-[#1e293b]/80 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-3 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-blue-700 px-2 py-1 rounded-full text-white">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-[#0b1a3b] max-w-xl w-full p-6 rounded-xl border border-gray-500 shadow-xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-white text-xl hover:text-red-400"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-gray-200 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-700 px-3 py-1 rounded-full text-white"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
                >
                  🔗 Live Demo
                </a>
              )}
              {selectedProject.code && (
                <a
                  href={selectedProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
                >
                  💻 View Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
