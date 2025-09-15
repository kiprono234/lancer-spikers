import React from "react";
import "./AboutSection.scss";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-card">
        <h3>ABOUT US</h3>
        <p>
          Learn more about our volleyball club, our mission, and our history.
        </p>
      </div>
      <div className="about-card">
        <h3>LATEST NEWS</h3>
        <p>
          Find out about our upcoming matches, events, and club updates.
        </p>
      </div>
    </section>
  );
}