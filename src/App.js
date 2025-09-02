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
      <div className="overlay" />

      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <button onClick={toggleDarkMode} className="dark-mode-toggle" aria-label="Toggle dark mode">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      <main className="content">
        <section className="hero glass">
          <h1>WhoCarez</h1>
          <p>Spreading hope, one care package at a time.</p>
        </section>

        <section className="info-section glass">
          <h2>What We Do</h2>
          <p>
            We make simple, thoughtful care packages — socks, soap, protein bars, and a can of Spam —
            all zipped up and ready to hand out to folks in need. It’s a small gesture that says,
            “Hey, someone cares.”
          </p>
        </section>

        <section className="info-section glass">
          <h2>How It Works</h2>
          <ul>
            <li>We bulk-buy essentials from Costco</li>
            <li>Assemble $10 care packs</li>
            <li>Keep them in our cars</li>
            <li>Hand them out to anyone who could use a little help</li>
          </ul>
        </section>

        <section className="images">
          <img src="/hand-giving.png" alt="Giving hand" />
          <img src="/care-package.png" alt="Care package" />
          <img src="/hand-receiving.png" alt="Receiving hand" />
        </section>

        <motion.section
          className="join-section glass"
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
      </main>

      <footer className="footer">© 2025 WhoCarez. All rights reserved.</footer>
    </div>
  );
}

export default App;
