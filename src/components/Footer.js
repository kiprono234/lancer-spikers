import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Lancet Spikers Volleyball Club. Join us in our vibrant volleyball community.
        </p>
        <nav className="footer__nav">
          <a href="#home" className="footer__link">Home</a>
          <a href="#about" className="footer__link">About</a>
          <a href="#contact" className="footer__link">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
