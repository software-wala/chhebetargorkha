import React, { useState } from "react";
import "../styles/NewsSection.css";

const NewsSection = () => {
  const allNewsItems = [
    {
      image: "news1.jpg",
      date: "January 21, 2023",
      title: "But Some of the Current Projects that Make Impro",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "#",
    },
    {
      image: "news2.jpg",
      date: "February 10, 2023",
      title: "Project that Began allow Second Phase in with Billion",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "#",
    },
    {
      image: "news3.jpg",
      date: "March 15, 2023",
      title: "Advancements in Construction and Design Techniques",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.",
      link: "#",
    },
    {
      image: "news4.jpg",
      date: "April 25, 2023",
      title: "The Impact of Sustainable Practices in Construction",
      description:
        "Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus.",
      link: "#",
    },
    {
      image: "news5.jpg",
      date: "May 10, 2023",
      title: "Modern Engineering Techniques Revolutionizing Construction",
      description:
        "Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit.",
      link: "#",
    },
    {
      image: "news6.jpg",
      date: "June 5, 2023",
      title: "How Technology is Shaping Construction Projects",
      description:
        "Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
      link: "#",
    },
    {
      image: "news7.jpg",
      date: "July 19, 2023",
      title: "The Future of Smart Cities and Construction",
      description:
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
      link: "#",
    },
    // Add more news items here
  ];

  const [visibleNewsCount, setVisibleNewsCount] = useState(5);

  const showMoreNews = () => {
    setVisibleNewsCount((prevCount) => prevCount + 5);
  };

  const visibleNewsItems = allNewsItems.slice(0, visibleNewsCount);

  return (
    <section className="news-section">
      <h2 className="section-title">Our Latest Blog & News</h2>
      <p className="section-description">
        Stay updated with the latest trends, projects, and news from our construction company.
      </p>
      <div className="news-items">
        {visibleNewsItems.map((item, index) => (
          <div className="news-item" key={index}>
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <p className="news-date">{item.date}</p>
              <h4 className="news-title">{item.title}</h4>
              <p className="news-description">{item.description}</p>
              <a href={item.link} className="read-more">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      {visibleNewsCount < allNewsItems.length && (
        <button className="show-more-btn" onClick={showMoreNews}>
          Show More News
        </button>
      )}
    </section>
  );
};

export default NewsSection;
