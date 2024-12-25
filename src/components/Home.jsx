import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import HeroSection2 from "./Herosection2";
import FAQSection from "./FQASection";
import ServiceSection from "./ServiceSection";
import TeamSection from "./TeamSection";
import PortfolioSection from "./PortfolioSection";
import NewsSection from "./NewsSection";
import Map from "./Map";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeroSection2 />
      <FAQSection />
      <ServiceSection />
      <TeamSection />
      <PortfolioSection />
      <NewsSection />
      <h1>Our Location</h1>

      <Map />
    </div>
  );
};

export default Home;
