import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <section className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"} transition-all duration-500`}>
      <div className={`relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 overflow-hidden 
        ${isDarkMode ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white" : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-black"}`}>
        
        {/* Background Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-0 left-0 w-72 h-72 rounded-full opacity-20 blur-3xl ${isDarkMode ? "bg-blue-500" : "bg-blue-300"}`}></div>
          <div className={`absolute bottom-16 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl ${isDarkMode ? "bg-purple-500" : "bg-purple-300"}`}></div>
        </div>

        {/* Title */}
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-center mb-2 relative z-10 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>Me</span>
        </motion.h1>

        {/* Line Divider */}
        <motion.div
          className={`w-32 h-1 rounded-lg mb-6 ${isDarkMode ? "bg-blue-500" : "bg-blue-600"}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Profile Image */}
          <motion.div
            className={`relative p-2 rounded-lg shadow-xl bg-gradient-to-r ${isDarkMode ? "from-blue-300 to-purple-300" : "from-blue-300 to-purple-400"}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.img
              src="/src/assets/images/subject.png"
              alt="Profile"
              className={`rounded-lg border-4 w-56 h-72 object-cover shadow-2xl ${isDarkMode ? "border-white" : "border-gray-900"}`}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            className={`text-md sm:text-lg max-w-2xl text-center md:text-left leading-relaxed relative z-10 mt-8 md:mt-0 tracking-wide ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="mb-4">
              <span className={isDarkMode ? "text-blue-400 font-semibold" : "text-blue-600 font-semibold"}>"Code is not just my work, it's my art."</span>  
              I am a passionate Full-Stack Developer who thrives on solving complex problems through elegant code and intuitive UI/UX design.
            </p>
            <p className="mb-4">
              I specialize in React.js, Angular, Node.js, and MongoDB, ensuring that every project I build is fast, scalable, and visually engaging.  
              Committed to learning and innovation, I aim to create meaningful and user-friendly digital solutions.
            </p>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          className="mt-3 text-center w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            🎓 My Education
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
            {/* School Card */}
            <motion.div
              className={`rounded-xl shadow-lg p-6 text-center w-80 sm:w-96 transform transition-all hover:scale-105 bg-gradient-to-r ${isDarkMode ? "from-blue-500 to-purple-400" : "from-blue-300 to-purple-400"}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold">🏫 High School</h3>
              <p className="text-lg mt-2">Vivek Vidyalaya Matric Hr Sec School</p>
              <p className="text-md mt-1">Graduated: 2020  {"-->"} 71%</p>
            </motion.div>

            {/* College Card */}
            <motion.div
              className={`rounded-xl shadow-lg p-6 text-center w-80 sm:w-96 transform transition-all hover:scale-105 bg-gradient-to-r ${isDarkMode ? "from-purple-500 to-blue-400" : "from-purple-400 to-blue-300"}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold">🎓 College</h3>
              <p className="text-lg mt-2">Sri Eshwar College of Engineering</p>
              <p className="text-md mt-1">B.E in ECE, Graduated: 2024{"-->"}8.9CGPA</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <div className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 text-sm tracking-wider mt-5 ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
          "Building technology that makes an impact" 💡
        </div>
      </div>
    </section>
  );
};

export default About;
