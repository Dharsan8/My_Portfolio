import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Contactpage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`relative flex justify-center items-center min-h-screen px-6 transition-all duration-500 
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      {/* Background Effects (No Changes) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-60 h-60 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      </div>

      {/* Improved Contact Card */}
      <motion.div
        className={`relative z-10 w-full max-w-lg backdrop-blur-lg p-8 rounded-2xl shadow-xl border transition-all duration-500 
        ${theme === "dark" ? "bg-gray-900/80 border-gray-700" : "bg-white border-gray-200 shadow-lg"}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Contact Me 💬
        </h2>

        {/* Contact Info Section */}
        <div className="mb-6 space-y-4">
          <div className="flex items-center space-x-3 text-sm">
            <FaPhoneAlt className="text-blue-500 text-lg" />
            <span className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              +91 9655608031
            </span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <FaEnvelope className="text-blue-500 text-lg" />
            <span className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              dharsan.s0503@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <FaMapMarkerAlt className="text-blue-500 text-lg" />
            <span className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Coimbatore, India
            </span>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full px-4 py-3 border rounded-xl text-sm  
            transition-all duration-300 
            ${theme === "dark" ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500"}`}
          />
          <input
            type="email"
            placeholder="Email Address"
            className={`w-full px-4 py-3 border rounded-xl text-sm 
            transition-all duration-300 
            ${theme === "dark" ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500"}`}
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className={`w-full px-4 py-3 border rounded-xl text-sm 
            transition-all duration-300 
            ${theme === "dark" ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500"}`}
          ></textarea>

          {/* Submit Button */}
          <button
            className="w-full py-3 font-bold text-sm bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-md 
            hover:shadow-lg hover:scale-105 transition-all duration-300 text-white"
          >
            Send Message 
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contactpage;
