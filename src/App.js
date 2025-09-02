import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import {
  FaMoon,
  FaSun,
  FaHeart,
  FaCheckCircle,
  FaArrowRight,
  FaShareAlt,
  FaPrint,
} from "react-icons/fa";

function useDarkMode() {
  const getPref = () =>
    localStorage.getItem("who-carez-dark") ??
    (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "true"
      : "false");

  const [isDark, setIsDark] = useState(getPref() === "true");

  useEffect(() => {
    localStorage.setItem("who-carez-dark", String(isDark));
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (localStorage.getItem("who-carez-dark") == null) {
        setIsDark(e.matches);
      }
    };
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return [isDark, setIsDark];
}

function PackBuilder() {
  const catalog = useMemo(
    () => [
      { id: "socks", name: "Socks" },
      { id: "soap", name: "Soap" },
      { id: "bars", name: "Protein bars" },
      { id: "spam", name: "Spam (classic)" },
      { id: "toothbrush", name: "Toothbrush" },
      { id: "wipes", name: "Wipes" },
      { id: "notes", name: "Handwritten note" },
    ],
    []
  );

  const [qty, setQty] = useState(() =>
    Object.fromEntries(catalog.map((i) => [i.id, 0]))
  );

  const total = Object.values(qty).reduce((a, b) => a + b, 0);

  const inc = (id) => setQty((q) => ({ ...q, [id]: q[id] + 1 }));
  const dec = (id) =>
    setQty((q) => ({ ...q, [id]: Math.max(0, q[id] - 1) }));

  const printableList = Object.entries(qty)
    .filter(([, v]) => v > 0)
    .map(([id, v]) => {
      const name = catalog.find((c) => c.id === id)?.name ?? id;
      return `${name} × ${v}`;
    })
    .join("\n");

  const share = async () => {
    const text =
      `Who Carez – My Pack List:\n\n` +
      (printableList || "No items yet. Add a few!");
    if (navigator.share) {
      try {
        await navigator.share({ title: "Who Carez Pack", text });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text);
      alert("Pack list copied to clipboard.");
    }
  };

  const printList = () => {
    const w = window.open("", "_blank");
    if (!w) return;
    w.document.write(
      `<pre style="font: 14px/1.6 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; padding: 24px;">${printableList || "No items yet. Add a few!"}</pre>`
    );
    w.document.close();
    w.focus();
    w.print();
  };

  return (
    <section id="builder" className="card">
      <h2>Build a Pack</h2>
      <p className="muted">
        Pick a few essentials. Keep a couple of packs in your car. When you see
        someone who could use it, you’re ready.
      </p>

      <div className="grid">
        {catalog.map((item) => (
          <div key={item.id} className="item">
            <div className="item-label">
              <FaCheckCircle aria-hidden="true" />
              <span>{item.name}</span>
            </div>
            <div className="qty">
              <button
                className="btn ghost"
                onClick={() => dec(item.id)}
                aria-label={`Decrease ${item.name}`}
              >
                –
              </button>
              <output aria-live="polite" className="count">
                {qty[item.id]}
              </output>
              <button
                className="btn"
                onClick={() => inc(item.id)}
                aria-label={`Increase ${item.name}`}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="builder-cta">
        <div className="total" aria-live="polite">
          Total items: <strong>{total}</strong>
        </div>
        <div className="actions">
          <button className="btn" onClick={share}>
            <FaShareAlt aria-hidden="true" /> Share list
          </button>
          <button className="btn outline" onClick={printList}>
            <FaPrint aria-hidden="true" /> Print list
          </button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className={`app-container ${dark ? "dark" : ""}`}>
      <a className="skip" href="#what-we-do">
        Skip to content
      </a>

      {/* Background Image */}
      <div
        className="background-image"
        style={{ backgroundImage: "url('/background-firewatch.png')" }}
        aria-hidden="true"
      />

      {/* Sticky Nav */}
      <nav className="nav" aria-label="Primary">
        <div className="brand">
          <img
            src="/logo.png"
            alt="Who Carez logo"
            className="logo"
            width="36"
            height="36"
          />
          <span className="name">Who Carez</span>
        </div>
        <ul className="links">
          <li>
            <a href="#what-we-do">What we do</a>
          </li>
          <li>
            <a href="#how-it-works">How it works</a>
          </li>
          <li>
            <a href="#builder">Build a pack</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        <button
          className="toggle-button"
          onClick={() => setDark((v) => !v)}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={dark}
          title={dark ? "Light mode" : "Dark mode"}
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </nav>

      <header className="hero">
        <p className="tagline">
          Care packages that come from the heart (and a Costco cart)
        </p>
        <h1 className="hero-title">
          Small packs. <span className="underline">Big kindness.</span>
        </h1>
        <div className="cta-row">
          <a className="btn cta" href="#builder">
            Build your first pack <FaArrowRight aria-hidden="true" />
          </a>
          <a className="btn outline" href="#how-it-works">
            How it works
          </a>
        </div>
      </header>

      <main>
        <section className="card" id="what-we-do">
          <h2>What We Do</h2>
          <p>
            We make simple, thoughtful care packages — socks, soap, protein
            bars, and a can of Spam — all zipped up and ready to hand out to
            folks in need. It’s a small gesture that says, “Hey, someone
            cares.”
          </p>
          <ul className="inside">
            <li>Socks (warm + durable)</li>
            <li>Soap / wipes for freshness</li>
            <li>Protein for real energy</li>
            <li>A little note that says: you matter</li>
          </ul>
        </section>

        <section className="card" id="how-it-works">
          <h2>How It Works</h2>
          <ol className="steps">
            <li>Bulk-buy essentials (Costco is our natural habitat)</li>
            <li>Assemble ~$10 care packs</li>
            <li>Keep a few in your car</li>
            <li>Hand them out when the moment finds you</li>
          </ol>
          <p className="muted">
            Not a big org (yet). Big hearts though. <FaHeart aria-hidden="true" />
          </p>
        </section>

        <PackBuilder />

        <section className="card" id="faq">
          <h2>FAQ</h2>
          <details>
            <summary>What goes in a typical pack?</summary>
            <p>Start with socks, soap, a protein snack, wipes, and Spam.</p>
          </details>
          <details>
            <summary>Is this a nonprofit?</summary>
            <p>Grassroots for now. If that changes, you’ll be the first to know.</p>
          </details>
          <details>
            <summary>How can I help if I can’t assemble packs?</summary>
            <p>
              Spread the idea. Share the page. Or donate goods to someone
              building packs near you.
            </p>
          </details>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Who Carez. Built with ❤️ and Spam.</p>
      </footer>
    </div>
  );
}
