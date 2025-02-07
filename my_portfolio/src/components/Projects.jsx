import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import Modal from "./Modal"; // Custom modal component
import ecommerceImg from "../assets/images/meanstack.png"
import bakeryImg from "../assets/images/bakery.png"
const projects = [
  {
    title: "E-Commerce Platform",
    stack: "MEAN Stack",
    description:
      "A full-stack e-commerce platform built using the MEAN stack, designed for showcasing and selling electronics. It features secure user authentication and an intuitive admin dashboard for managing products and orders.",
    image: ecommerceImg, 
    github: "#",
    features: [
      "Secure User Authentication",
      "Product Search & Filtering",
      "Cart & Checkout System",
      "Admin Panel for Inventory",
      "Payment Integration",
    ], story: "The idea for this project came from my passion for technology and the growing demand for seamless online shopping experiences. I wanted to create a platform where users could browse and purchase electronics effortlessly, with a secure and efficient checkout process.",
    builtwith: "This project leverages the power of MEAN STACK, ensuring performance, scalability, and a seamless user experience."
  },
  {
    title: "Beaking Application",
    stack: "MERN Stack",
    description:
      "An intuitive online baking platform built with the MERN stack, allowing users to browse, customize, and order freshly baked goods. It features secure authentication, a smooth checkout process, and efficient order management.",
    image: bakeryImg,
    github: "#",
    features: [
      "Admin Dashboard",
      "Secure Authentication",
      "Customization Options",
      "Order Tracking",
      "Responsive Design",
    ],story: "As a food lover, I wanted to create a platform that makes ordering freshly baked goods easy and convenient. Inspired by the growing demand for online food services, I built this application using the MERN stack to provide a smooth and engaging user experience.",
    builtwith: "Built with the MERN stack (MongoDB, Express.js, React.js, Node.js) for a seamless, responsive, and scalable online baking experience."
  },
  {
    title: "Student Management System",
    stack: "Python(Django)",
    description:
      "A web-based Student Management System built with Python and Django to efficiently handle student records, course enrollments, and academic performance tracking. It features role-based authentication, automated report generation.",
    image: "/images/job-portal.png",
    github: "#",
    features: [
      "Student Records Management",
      "Course Enrollment",
      "Attendance Tracking",
      "Grades & Performance Reports",
      "Admin Dashboard ",
    ],
    story:"Managing student records manually can be tedious and error-prone, so I built this system to streamline academic administration. Using Python and Django, I created a secure and efficient platform for handling student data, attendance, and performance tracking. This project enhanced my skills in database management, authentication, and user-friendly UI design.",
    builtwith:"Built with Python and Django for a robust, scalable, and secure student management solution.",
  },
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen p-6 sm:p-12 transition-all duration-500`}
    >
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-center mb-8 tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>Projects</span>
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`relative p-6 rounded-3xl shadow-xl border transition-all duration-500 overflow-hidden group transform hover:scale-105 cursor-pointer
            ${isDarkMode ? "bg-gray-800 border-gray-700 hover:border-blue-500" : "bg-white border-gray-300 hover:border-blue-400"}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Image */}
            <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-80 transition-opacity">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Title & Stack */}
            <h3 className="text-2xl font-bold mt-4 group-hover:text-blue-400 transition-all">
              {project.title}
            </h3>
            <p className="text-blue-400 text-lg font-medium">{project.stack}</p>
            <p className="mt-2 text-sm opacity-75">{project.description}</p>

            {/* GitHub Link */}
            <div className="mt-4 flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg transition transform hover:translate-y-1
                bg-blue-600 text-white hover:bg-blue-700"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Projects;
