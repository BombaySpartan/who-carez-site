import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="app-container">
      <header>
        <motion.img
          src="https://www.whocarez.org/logo.png"
          alt="Who Carez Logo"
          className="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Who Carez
        </motion.h1>
        <motion.p
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Care packages that come from the heart (and a Costco cart)
        </motion.p>
      </header>

      <main>
        <motion.section
          className="mission"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>What We Do</h2>
          <p>
            We make simple, thoughtful care packages — socks, soap, protein bars, and a can of Spam —
            all zipped up and ready to hand out to folks in need. It’s a small gesture that says,
            “Hey, someone cares.”
          </p>
        </motion.section>

        <motion.section
          className="how-it-works"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>How It Works</h2>
          <ol>
            <li>We bulk-buy essentials from Costco</li>
            <li>Assemble $10 care packs</li>
            <li>Keep them in our cars</li>
            <li>Hand them out to anyone who could use a little help</li>
          </ol>
        </motion.section>

        <motion.section
          className="call-to-action"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>Want to Join In?</h2>
          <p>
            Start your own little stockpile. Help a neighbor. Donate goods. Or just spread the word.
            We’re not a big org (yet), but we’ve got big hearts.
          </p>
        </motion.section>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>© {new Date().getFullYear()} Who Carez. Built with ❤️ and Spam.</p>
      </motion.footer>
    </div>
  );
}

export default App;
