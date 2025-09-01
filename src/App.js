import React, { useState, useEffect } from 'react';
import './App.css';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <header className="hero">
        <div className="dark-toggle">
          <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <img
          src="/logo.png"
          alt="Who Carez Logo"
          className="logo"
        />
        <h1>Who Carez</h1>
        <p className="tagline">Care packages that come from the heart (and a Costco cart)</p>

        <nav className="nav-links">
          <a href="#what">What We Do</a>
          <a href="#how">How It Works</a>
          <a href="#join">Want to Join?</a>
        </nav>
      </header>

      <main>
        <section id="what" className="content-section">
          <h2>What We Do</h2>
          <p>
            We make simple, thoughtful care packages — socks, soap, protein bars, and a can of Spam —
            all zipped up and ready to hand out to folks in need. It’s a small gesture that says, “Hey, someone cares.”
          </p>
        </section>

        <section id="how" className="content-section">
          <h2>How It Works</h2>
          <ol>
            <li>We bulk-buy essentials from Costco</li>
            <li>Assemble $10 care packs</li>
            <li>Keep them in our cars</li>
            <li>Hand them out to anyone who could use a little help</li>
          </ol>
        </section>

        <section id="join" className="content-section">
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
