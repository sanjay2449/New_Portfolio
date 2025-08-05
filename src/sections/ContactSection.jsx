import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
const SERVICE_ID = "service_ujeji55";
const TEMPLATE_ID = "template_no8767h";
const PUBLIC_KEY = "GA7q9EN3dVh7UPNyN";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name, email, message },
        PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      toast.error("Failed to send. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0b1a3b] text-white py-16 px-4 sm:px-8 overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-blue-400"
        >
          <h3 className="text-3xl font-semibold text-blue-300 mb-6 flex items-center justify-center gap-2">
          <HiOutlineMail/> Contact Me
          </h3>
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
            placeholder="Your Name (required)"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md border border-gray-600 bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none"
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Your Email (required)"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-600 bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none"
            required
          />
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            rows="5"
            placeholder="Your Message (required)"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-600 bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none"
            required
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition duration-300 flex items-center justify-center"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "✉️ Send Message"
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
