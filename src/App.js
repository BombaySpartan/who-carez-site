import React, { useState } from 'react';
import './App.css';
import { FaMoon, FaSun } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header className="hero-section">
        <div className="toggle-container">
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <img src="/logo.png" alt="Who Carez Logo" className="logo" />
        <h1 className="site-title">Who Carez</h1>
        <p className="tagline">Care packages from the heart (and a Costco cart)</p>
      </header>

      <nav className="nav-links">
        <a href="#what-we-do">What We Do</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#join-in">Join In</a>
      </nav>

      <main>
        <section id="what-we-do" className="section">
          <h2>What We Do</h2>
          <p>
            We make simple, thoughtful care packages — socks, soap, protein bars, and a can of Spam —
            all zipped up and ready to hand out to folks in need. It’s a small gesture that says,
            “Hey, someone cares.”
          </p>
        </section>
		<section className="care-scene">
  <img
    src="/care-package-scene.png"
    alt="Giving and Receiving a Care Package"
    className="care-scene-image"
  />
</section>
<div className="illustrations">
  <img src="/hand-giving.png" alt="Giving hand" />
  <img src="/hand-receiving.png" alt="Receiving hand" />
  <img src="/care-package.png" alt="Care package" />
</div>
        <section id="how-it-works" className="section">
          <h2>How It Works</h2>
          <ol>
            <li>We bulk-buy essentials from Costco</li>
            <li>Assemble $10 care packs</li>
            <li>Keep them in our cars</li>
            <li>Hand them out to anyone who could use a little help</li>
          </ol>
        </section>

        <section id="join-in" className="section">
          <h2>Want to Join In?</h2>
          <p>
            Start your own little stockpile. Help a neighbor. Donate goods. Or just spread the word.
            We’re not a big org (yet), but we’ve got big hearts.
          </p>
        </section>

        {/* Placeholder for animated interaction */}
        <section className="section animated-care">
          <h2>The Giving Moment</h2>
          <div className="care-animation">
            <img src="/hand-giving.png" alt="Hand Giving Package" className="hand-giving" />
            <img src="/care-package.png" alt="Care Package" className="care-package" />
            <img src="/hand-receiving.png" alt="Hand Receiving Package" className="hand-receiving" />
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Who Carez. Built with ❤️ and Spam.</p>
      </footer>
    </div>
  );
}

export default App;
