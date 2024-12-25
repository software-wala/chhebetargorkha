import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>
        Highest <span style={{ color: "orange" }}> Standards </span> of
        Construction
      </h1>
      <p>
      Transforming visions into reality through expert craftsmanship and uncompromising quality. We build sustainable structures for a brighter future, together with our clients.
      </p>
      <button className="read-more-btn">Read More</button>
      <button className="contact-us-btn">Contact Us</button>
    </section>
  );
};

export default HeroSection;
