import React from 'react';
import './Header.scss';

const navLinks = [
    {name: "HOME", href: "#"},
    {name: "ABOUT", href: "#"},
    {name: "TEAMS", href: "#"},
    {name: "FIXTURES", href: "#"},
    {name: "CONTACT", href: "#"},
];

export default function Header() {
    return (
      <header className="header">
        <nav className="header__nav">
          <ul className="header__nav-list">
            {navLinks.map(link => (
              <li key={link.name} className="header__nav-item">
                <a href={link.href} className="header__nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
          <button className="header__menu-btn" aria-label="Open menu">
            {/* Hamburger Icon */}
            <span className="header__menu-icon"></span>
          </button>
        </nav>
      </header>
    );
  }