import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import HeroSection2 from "./Herosection2";
import FAQSection from "./FQASection";
import PortfolioSection from "./PortfolioSection";
import TeamSection from "./TeamSection";
import NewsSection from "./NewsSection";
import Footer from "./Footer";
import Home from "./Home";

function FinalComponent() {
  return (
    <Router>
      <Navbar /> {/* Navbar component with links */}

      <Routes>
        <Route
          path="/"
          element={
            <>
             <Home/>
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <ServiceSection
                title="Architecture Design"
                description="We create stunning architectural designs that blend form and function seamlessly."
                image="architecture.jpg"
              />
              <ServiceSection
                title="Build Construction"
                description="Quality construction services that stand the test of time."
                image="construction.jpg"
              />
              <ServiceSection
                title="Building Renovation"
                description="Renovate your space with innovative solutions."
                image="renovation.jpg"
              />
            </>
          }
        />
        <Route path="/portfolio" element={<PortfolioSection />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/news" element={<NewsSection />} />
        <Route path="/faq" element={<FAQSection />} />
      </Routes>

      <Footer /> {/* Footer component */}
    </Router>
  );
}

export default FinalComponent;
