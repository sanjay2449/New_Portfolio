import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import axios from "axios";
import { toast } from "react-hot-toast";
import { FaFileAlt } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [expandedCards, setExpandedCards] = useState([]); // Track expanded cards

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/reviews`);
        if (Array.isArray(res.data)) {
          setReviews(res.data.reverse());
          setExpandedCards(new Array(res.data.length).fill(false)); // init expansion state
        } else {
          console.error("Invalid response data:", res.data);
        }
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      }
    };
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRatingClick = (ratingValue) => {
    setFormData((prev) => ({
      ...prev,
      rating: ratingValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment || !formData.rating) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/api/reviews`, formData);
      setReviews((prev) => [res.data, ...prev]);
      setExpandedCards((prev) => [false, ...prev]); // add default collapsed state for new review
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", rating: 0, comment: "" });
    } catch (err) {
      toast.error("Failed to submit review", err);
    }
  };

  const toggleExpand = (index) => {
    setExpandedCards((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <section
      id="reviews"
      className="bg-[#0b1a3b] text-white py-16 px-4 sm:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-blue-300 mb-6 flex items-center justify-center gap-2"
          >
            <FaFileAlt /> Reviews
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 mb-8"
          >
            See what people are saying about working with me – your feedback matters!
          </motion.p>

          {/* Review Form */}
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

            {/* Modern Star Rating */}
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  className={`text-3xl focus:outline-none transition-transform ${star <= formData.rating ? "text-yellow-400 scale-110" : "text-gray-500"
                    }`}
                >
                  ★
                </button>
              ))}
            </div>

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="comment"
              rows="5"
              placeholder="Your Message (required)"
              value={formData.comment}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-600 bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none"
              required
            ></motion.textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition duration-300 flex items-center justify-center"
            >
              📧 Send Review
            </motion.button>
          </form>

          {/* Reviews List */}
          {reviews.length > 0 && (
            <div className="space-y-8 mt-16">
              <h3 className="text-2xl font-bold text-center text-blue-300 mb-6">
                What Others Say
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[#132a57] to-[#0f234e] p-6 rounded-3xl shadow-lg border border-blue-800 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-white relative overflow-hidden"
                  >
                    {/* Avatar + Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full text-white font-bold">
                        {review.name?.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-semibold">{review.name}</p>
                        {review.email && (
                          <p className="text-xs text-gray-400 break-all">{review.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Star Ratings */}
                    <div className="text-yellow-400 text-lg mb-3">
                      {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                    </div>

                    {/* Comment */}
                    <AnimatePresence initial={false}>
                      <motion.div
                        key={expandedCards[index] ? "expanded" : "collapsed"}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden text-gray-300"
                      >
                        <p
                          className="text-sm"
                          style={
                            !expandedCards[index]
                              ? {
                                display: "-webkit-box",
                                WebkitLineClamp: 5,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }
                              : {}
                          }
                        >
                          {review.comment}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                    {/* Toggle Read More */}
                    {review.comment.length > 150 && (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleExpand(index)}
                        className="text-blue-400 mt-2 text-sm hover:underline focus:outline-none"
                      >
                        {expandedCards[index] ? "Read Less" : "Read More"}
                      </motion.button>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewSection;
