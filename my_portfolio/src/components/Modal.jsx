import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaGithub, FaCheckCircle, FaCode, FaCogs } from "react-icons/fa";

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
      {/* Modal Container */}
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-11/12 max-w-3xl p-6 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500 transition bg-gray-200 dark:bg-gray-800 p-2 rounded-full"
        >
          <FaTimes size={20} />
        </button>

        {/* Project Title & Tech Stack */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
        <p className="text-blue-500 font-semibold text-lg mb-4">{project.stack}</p>

        {/* Storytelling Style Project Description */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
            <FaCode className="text-blue-500" /> The Story Behind:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.story}
          </p>
        </div>

        {/* Features List */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Key Highlights:
          </h3>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <FaCheckCircle className="text-green-500" /> {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
            <FaCogs className="text-yellow-500" /> Built With:
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{project.builtwith}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mt-4 gap-4">
          {/* GitHub Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            <FaGithub /> GitHub Repository
          </a>

          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;