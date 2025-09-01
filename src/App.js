import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="app-container">
      <header>
        <div className="dark-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider" />
            <span className="label-text">Dark Mode</span>
          </label>
        </div>
        <section className="max-w-4xl mx-auto text-center">
          <img
            src="/logo.png"
            alt="Who Carez Logo"
            className="mx-auto mb-8 w-64"
          />
          <h1>Who Carez</h1>
          <p className="tagline">
            Care packages that come from the heart (and a Costco cart)
          </p>
        </section>
      </header>

      <main>
        <section className="mission">
          <h2>What We Do</h2>
          <p>
            We make simple, thoughtful care packages — socks, soap, protein bars, and a can of Spam —
            all zipped up and ready to hand out to folks in need. It’s a small gesture that says, “Hey, someone cares.”
          </p>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <ol>
            <li>We bulk-buy essentials from Costco</li>
            <li>Assemble $10 care packs</li>
            <li>Keep them in our cars</li>
            <li>Hand them out to anyone who could use a little help</li>
          </ol>
        </section>

        <section className="call-to-action">
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
