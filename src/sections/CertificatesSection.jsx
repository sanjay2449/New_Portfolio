import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import certificates from "../data/certificates"; // your certificate data array

const CertificatesSection = () => {
  const scrollRef = useRef(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const CARD_WIDTH = 360;
  const AUTOPLAY_INTERVAL = 5000;

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -CARD_WIDTH : CARD_WIDTH;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Autoplay
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft + CARD_WIDTH >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
      }
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Swipe gesture
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) scroll("right");
    else if (diff < -threshold) scroll("left");
  };

  return (
    <section id="certifications" className="py-16 px-4 sm:px-8 bg-[#0b1a3b] text-white">
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">🎓 Certifications</h2>
        <p className="text-lg text-gray-300">My verified certifications and achievements.</p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative z-10">
        <div
          ref={scrollRef}
          className="flex gap-6 px-2 overflow-x-hidden scroll-smooth scrollbar-hide"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCertificate(cert)}
              className="cursor-pointer bg-[#0f172a]/70 border border-gray-600 rounded-xl shadow-md p-6 w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 hover:bg-[#1e293b]/80 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-300">{cert.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-blue-700 px-2 py-1 rounded-full text-white">
                    #{cert.tags.join(" #")}
                  </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="relative z-10 flex items-center justify-center mt-4 gap-4">
        <button
          onClick={() => scroll("left")}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-[#0b1a3b] max-w-3xl w-full p-6 rounded-xl border border-gray-500 shadow-xl relative">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-3 right-4 text-white text-xl hover:text-red-400"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">{selectedCertificate.title}</h3>
            <p className="text-gray-300 mb-4">
              Issued by <span className="text-white">{selectedCertificate.description}</span> in{" "}
              {selectedCertificate.tags}
            </p>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full max-h-[500px] object-contain rounded border border-gray-600"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
