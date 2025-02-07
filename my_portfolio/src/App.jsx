import './App.css';
import Herosection from './components/Herosection';
import About from './components/About';
import Skillspage from './components/Skillspage';
import Projects from './components/Projects';
import Contactpage from './components/Contactpage';
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Router>



        {/* Navbar for Navigation */}
        <Navbar />
        
        {/* Routes for Navigation */}
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skillspage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
