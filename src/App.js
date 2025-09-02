// App.js

import React, { useState } from 'react';
import './App.css';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';
import firewatchBg from './assets/background-firewatch.png';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
  <div
  className={`app ${darkMode ? 'dark-mode' : ''}`}
  style={{ backgroundImage: `url(${firewatchBg})` }}
>
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      {/* Header */}
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <button onClick={toggleDarkMode} className="dark-mode-toggle" aria-label="Toggle dark mode">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>WhoCarez</h1>
        <p>Spreading hope, one care package at a time.</p>
      </section>

      {/* Images Section */}
      <section className="images">
        <img src="/hand-giving.png" alt="Giving hand" />
        <img src="/care-package.png" alt="Care package" />
        <img src="/hand-receiving.png" alt="Receiving hand" />
      </section>

      {/* Join Section with Animation */}
      <motion.section
        className="join-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Want to Join In?</h2>
        <p>
          Help us deliver kindness by joining our volunteer network or donating to support care
          package deliveries worldwide.
        </p>
        <button className="cta-button">Get Involved</button>
      </motion.section>

      {/* Footer */}
      <footer className="footer">© 2025 WhoCarez. All rights reserved.</footer>
    </div>
  );
}

export default App;
