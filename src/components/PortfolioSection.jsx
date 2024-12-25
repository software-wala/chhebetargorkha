import React from "react";
import "../styles/PortfolioSection.css";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      imageSrc: "image1.jpg",
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      imageSrc: "image2.jpg",
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      imageSrc: "image3.jpg",
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      imageSrc: "image4.jpg",
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      imageSrc: "image5.jpg",
      title: "Project 5",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      imageSrc: "image6.jpg",
      title: "Project 6",
      description: "Lorem ipsum dolor sit amet...",
    },
  ];

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Take A Look At Our Portfolios</h2>
      <p className="portfolio-description">
        Discover our diverse projects crafted with precision and creativity.
      </p>
      <div className="filters">
        <button className="filter-button active">All</button>
        <button className="filter-button">Cleaner</button>
        <button className="filter-button">Designer</button>
        <button className="filter-button">Exterior</button>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <div className="portfolio-image-wrapper">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="portfolio-image"
              />
            </div>
            <h4 className="portfolio-item-title">{item.title}</h4>
            <p className="portfolio-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
