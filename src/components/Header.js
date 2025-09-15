import React, { useState } from "react";
import "./Header.scss";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">Lancet Spikers</div>
      <nav className={`header__nav ${mobileMenuOpen ? "open" : ""}`}>
        <a href="#" className="header__nav-link">Home</a>
        <a href="#about" className="header__nav-link">About</a>
        <a href="#teams" className="header__nav-link">Teams</a>
        <a href="#fixtures" className="header__nav-link">Fixtures</a>
        <a href="#gallery" className="header__nav-link">Gallery</a>
        <a href="#contact" className="header__nav-link">Contact</a>
      </nav>
      <button
        className="header__menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Open navigation"
      >
        <span className="header__menu-icon">&#9776;</span>
      </button>
      {/* Mobile nav overlay */}
      {mobileMenuOpen && (
        <div className="header__mobile-nav">
          <a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#teams" onClick={() => setMobileMenuOpen(false)}>Teams</a>
          <a href="#fixtures" onClick={() => setMobileMenuOpen(false)}>Fixtures</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}