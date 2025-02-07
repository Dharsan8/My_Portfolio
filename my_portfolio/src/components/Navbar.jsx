import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import IconButton from "@mui/material/IconButton";
import { ThemeContext } from "../context/ThemeContext";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <motion.div
      className="flex items-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/src/assets/images/DHARSANLogo.png" 
        alt="Logo" 
        className="h-10 md:h-8 w-auto object-contain" 
      />
    </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "text-gray-500 hover:text-yellow-300"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <div className="hidden md:flex">
            <IconButton onClick={toggleTheme} color="inherit">
              {theme === "dark" ? (
                <Brightness7Icon fontSize="small" className="text-gray-500" />
              ) : (
                <Brightness4Icon fontSize="small" className="text-gray-500" />
              )}
            </IconButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-gray-300" size={24} /> : <Menu className="text-gray-300" size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={isOpen ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden fixed top-0 left-0 w-full bg-white/20 backdrop-blur-lg py-4 transition-all ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium tracking-wide ${
                location.pathname === link.path ? "text-yellow-400" : "text-gray-300 hover:text-yellow-300"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Dark Mode Toggle (Mobile) */}
          <IconButton onClick={toggleTheme} color="inherit">
            {theme === "dark" ? (
              <Brightness7Icon fontSize="small" className="text-gray-300" />
            ) : (
              <Brightness4Icon fontSize="small" className="text-gray-300" />
            )}
          </IconButton>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
