import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <nav className="navbar">
        <div className="nav-left">
          <img src="/logo.png" alt="Who Carez Logo" className="nav-logo" />
          <span className="nav-title">Who Carez</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('what')}>What</button>
          <button onClick={() => scrollToSection('how')}>How</button>
          <button onClick={() => scrollToSection('join')}>Join</button>
        </div>
        <div className="toggle-switch">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </nav>

      <header className="header">
        <h1>Who Carez</h1>
        <p className="tagline">Care packs from the heart (and a Costco cart)</p>
      </header>

      <main>
        <section id="what" className="section">
          <h2>What We Do</h2>
          <p>
            We make simple, thoughtful care packages — socks, soap, protein bars, and a can of Spam —
            all zipped up and ready to hand out to folks in need. It’s a small gesture that says, “Hey, someone cares.”
          </p>
        </section>

        <section id="how" className="section">
          <h2>How It Works</h2>
          <ol>
            <li>We bulk-buy essentials from Costco</li>
            <li>Assemble $10 care packs</li>
            <li>Keep them in our cars</li>
            <li>Hand them out to anyone who could use a little help</li>
          </ol>
        </section>

        <section id="join" className="section">
          <h2>Want to Join In?</h2>
          <p>
            Start your own little stockpile. Help a neighbor. Donate goods. Or just spread the word.
            We’re not a big org (yet), but we’ve got big hearts.
          </p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Who Carez. Built with ❤️ and Spam.</p>
      </footer>
    </div>
  );
}

export default App;
