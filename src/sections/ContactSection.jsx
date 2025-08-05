import { useState } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/heroAnimation.json"; // Replace with your Lottie file

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-[#0b1a3b] text-white py-16 px-4 sm:px-8 overflow-hidden"
    >
      {/* Optional Lottie Background */}
      {/* <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Player autoplay loop src={animationData} style={{ width: "100%", height: "100%" }} />
      </div> */}

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-blue-400"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mb-8"
        >
          Have a question or want to work together? Drop me a message!
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-600 bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none"
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-600 bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none"
          />
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-600 bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none"
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition duration-300"
          >
            ✉️ Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
