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
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa cum sociis theme natoque penatibus etec
        magnis dis parturient montes.
      </p>
      <button className="read-more-btn">Read More</button>
      <button className="contact-us-btn">Contact Us</button>
    </section>
  );
};

export default HeroSection;
