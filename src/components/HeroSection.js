import React from "react";
import "./HeroSection.scss";
import logo from "../assets/logo.png"; // Adjust path if needed

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__logo-banner">
        <img
          src={logo}
          alt="Lancet Spikers Logo"
          className="hero__logo-img"
        />
      </div>
      <div className="hero__content">
        <h1>WELCOME TO<br/>LANCET SPIKERS</h1>
        <h2>PLAY WITH PASSION</h2>
      </div>
    </section>
  );
}