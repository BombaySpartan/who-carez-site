import React, { useState, useEffect } from 'react';
import './App.css';
import { FaMoon, FaSun } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-title" onClick={() => scrollTo('hero')}>
          <img src="/logo.png" alt="Who Carez Logo" className="logo-sm" />
          <span>Who Carez</span>
        </div>
        <ul>
          <li onClick={() => scrollTo('what')}>What We Do</li>
          <li onClick={() => scrollTo('how')}>How It Works</li>
          <li onClick={() => scrollTo('join')}>Join In</li>
        </ul>
        <button className="dark-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>

      {/* Hero / Parallax Section */}
      <header id="hero" className="hero">
        <div className="overlay">
          <img src="/logo.png" alt="Who Carez Logo" className="logo-main" />
          <h1>Who Carez</h1>
          <p>Care packages that come from the heart (and a Costco cart)</p>
        </div>
      </header>

      {/* What We Do */}
      <section id="what" className="section">
        <h2>What We Do</h2>
        <p>
          We make simple, thoughtful care packages — socks, soap, protein bars, and a can of Spam —
          all zipped up and ready to hand out to folks in need. It’s a small gesture that says,
          “Hey, someone cares.”
        </p>
      </section>

      {/* How It Works */}
      <section id="how" className="section">
        <h2>How It Works</h2>
        <ol>
          <li>We bulk-buy essentials from Costco</li>
          <li>Assemble $10 care packs</li>
          <li>Keep them in our cars</li>
          <li>Hand them out to anyone who could use a little help</li>
        </ol>
      </section>

      {/* Want to Join */}
      <section id="join" className="section">
        <h2>Want to Join In?</h2>
        <p>
          Start your own little stockpile. Help a neighbor. Donate goods. Or just spread the word.
          We’re not a big org (yet), but we’ve got big hearts.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Who Carez. Built with ❤️ and Spam.</p>
      </footer>
    </div>
  );
}

export default App;
