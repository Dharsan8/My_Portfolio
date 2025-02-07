import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext"; // Make sure ThemeContext is properly set up
import { 
  SiPython, SiMongodb, SiAngular, SiReact, SiJavascript, 
  SiHtml5, SiCss3, SiMysql, SiNodedotjs, SiExpress, SiTypescript 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const skills = [
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Angular", icon: <SiAngular className="text-red-500" /> },
  { name: "React", icon: <SiReact className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
];

const Skillspage = () => {
  const { theme } = useContext(ThemeContext); // Access current theme from context

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-all duration-500 px-6 sm:px-12`}>
      {/* Title */}
      <motion.h1
        className="text-5xl font-extrabold mb-1 text-center mt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-400">Skills</span> 
      </motion.h1>

      {/* Line Divider */}
      <motion.div
        className={`w-32 h-1 ${theme === "dark" ? "bg-blue-500" : "bg-blue-600"} rounded-lg mb-1 mt-2`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      ></motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-8 max-w-5xl w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`relative ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} p-4 rounded-xl shadow-lg flex flex-col items-center justify-center transform transition duration-500 hover:scale-110 hover:shadow-blue-500/50 group overflow-hidden`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
              {skill.icon}
            </div>
            <h3 className={`text-lg font-semibold group-hover:text-blue-400 transition-colors duration-300`}>
              {skill.name}
            </h3>
            <div className={`absolute inset-0 ${theme === "dark" ? "bg-blue-500" : "bg-blue-300"} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
          </motion.div>
        ))}
      </div>

      {/* Training Experience Card */}
      <motion.div
        className={`mt-12 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} p-4 rounded-2xl shadow-2xl max-w-3xl w-full text-center border ${theme === "dark" ? "border-blue-500" : "border-blue-300"} transform transition duration-500 hover:scale-105 hover:shadow-blue-500/50`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-4">Training Experience</h2>
        <p className="text-lg text-black-300">Completed 8 months of intensive training at <span className="text-yellow-400 font-semibold">Aspire Systems </span>as a MERN & MEAN Stack Intern, gaining hands-on experience in web development, including front-end and back-end development, project design,  database management and industry best practices. </p>
      </motion.div>
    </div>
  );
};

export default Skillspage;
