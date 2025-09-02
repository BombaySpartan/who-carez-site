import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <header className="header">
        <img src="/logo.png" alt="WhoCarez Logo" className="logo" />
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      <main>
        <section className="hero">
          <h1>WhoCarez</h1>
          <p>Spreading kindness, one care package at a time.</p>
        </section>

        <section className="images">
          <img src="/hand-giving.png" alt="Giving hand" />
          <img src="/hand-receiving.png" alt="Receiving hand" />
          <img src="/care-package.png" alt="Care package" />
        </section>

        {/* 🌟 Animated Section */}
        <motion.section
          id="join"
          className="join-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Want to Join In?</h2>
          <p>
            We’re always looking for new hands and hearts. Whether you want to
            donate, volunteer, or just spread the word — there’s a place for you here.
          </p>
          <button className="cta-button">Join the Cause</button>
        </motion.section>
      </main>

      <footer className="footer">
        <p>© 2025 WhoCarez. Built with heart.</p>
      </footer>
    </div>
  );
}

export default App;
