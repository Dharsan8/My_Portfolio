import React from "react";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useContext,useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Herosection = () => {
  const { theme } = useContext(ThemeContext);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../public/resume.pdf"; // Ensure your resume is in the 'public' folder
    link.download = "My_Resume.pdf"; // The name it will be saved as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);

  const handleClick = () => {
    setShowLoading(true);

    // Wait for animation (1s), then navigate
    setTimeout(() => {
      navigate("/about");
    }, 1000);
  };
  return (
    <section className={theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
      <div
        className={`min-h-screen flex flex-col justify-center items-center relative transition-all duration-500 px-6 sm:px-10 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        </div>

        {/* Profile Image with Fixed Bounce Effect */}
        <motion.div
        className={`relative p-2 rounded-full shadow-xl bg-gradient-to-r ${
          theme === "dark" ? "from-blue-300 to-purple-300" : "from-blue-300 to-purple-400"
        }`}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.img
            src="/src/assets/images/imgback1.png"
            alt="Profile"
            className="rounded-full border-4 border-white w-44 h-44 sm:w-56 sm:h-56 object-cover shadow-2xl"
          />
        </motion.div>

        {/* Name & Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mt-5 text-center">
          I'm <span className="text-blue-500">DHARSAN</span> 
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium mt-2 text-center text-gray-500">
          <Typewriter
            options={{
              strings: ["Full-Stack Developer Trainee"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        {/* Extra Details */}
        <div className="mt-4 space-y-2 text-center">
          <p className="text-lg sm:text-xl font-medium">
             Passionate about crafting beautiful & high-performance websites.
          </p>
          <p className="text-md sm:text-lg font-semibold">
            📍 Location: <span className="text-blue-500">Chennai, Coimbatore, Bengalore</span> | 💼 Available for Work
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-6">
        <motion.button
      className="relative bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-blue-500/50 active:scale-95"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      {showLoading ? "Loading..." : "View Details"}
      <span className="absolute inset-0 bg-blue-500 opacity-30 rounded-xl blur-lg"></span>
    </motion.button>

    <motion.button
      className="relative border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-lg transition-all transform hover:bg-blue-600 hover:text-white hover:shadow-blue-500/50 active:scale-95"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
    >
      Download Resume
      <span className="absolute inset-0 bg-blue-500 opacity-20 rounded-xl blur-lg"></span>
    </motion.button>
    </div>

{/* Social Icons */}
<div className="mt-6 flex space-x-6">
  {[
    {
      icon: <GitHub fontSize="large" className={theme === "dark" ? "text-white" : "text-gray-700"} />,
      link: "https://github.com/Dharsan8"
    },
    {
      icon: <LinkedIn fontSize="large" className={theme === "dark" ? "text-white" : "text-blue-700"} />,
      link: "https://linkedin.com/in/dharsan-s-45b785250"
    },
    {
      icon: <Instagram fontSize="large" className={theme === "dark" ? "text-white" : "text-pink-500"} />,
      link: "#"
    }
  ].map(({ icon, link }, index) => (
    <motion.a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-4 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg transition-all transform hover:scale-110 hover:shadow-xl active:scale-95"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span className="absolute inset-0 bg-gray-500 opacity-10 rounded-full blur-xl"></span>
    </motion.a>
  ))}
</div>

      </div>
    </section>
  );
};

export default Herosection;
