import React from 'react';
import '../styles/ServiceSection.css';

const ServiceSection = ({ title, description, image }) => {
  return (
    <section className="service-section">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
    </section>
  );
};

export default ServiceSection;