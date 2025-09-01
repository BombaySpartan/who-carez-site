import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "app-container dark" : "app-container"}>
      {/* Toggle */}
      <div className="toggle-container">
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Header */}
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="/logo.png" alt="WhoCarez Logo" className="logo" />
        <h1>WhoCarez</h1>
        <p className="tagline">Delivering care, one package at a time</p>
      </motion.header>

      {/* Animated Hero Background */}
      <motion.section
        className="hero-scene"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img src="/background-firewatch.png" alt="Firewatch-style bg" className="background-image" />
        <img src="/hand-giving.png" alt="Giving Hand" className="hand hand-giving" />
        <img src="/care-package.png" alt="Care Package" className="package" />
        <img src="/hand-receiving.png" alt="Receiving Hand" className="hand hand-receiving" />
      </motion.section>

      {/* Main Sections */}
      <main>
        <motion.section
          id="about"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>What We Do</h2>
          <p>
            We deliver essential care packages to those in need. Hygiene, food,
            and love — wrapped in compassion.
          </p>
        </motion.section>

        <motion.section
          id="how"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>How It Works</h2>
          <ol>
            <li>You donate 💖</li>
            <li>We assemble & ship 📦</li>
            <li>Someone gets the care they deserve 🙌</li>
          </ol>
        </motion.section>
      </main>

      <footer>
        Made with 💜 by the WhoCarez team.
      </footer>
    </div>
  );
}

export default App;
