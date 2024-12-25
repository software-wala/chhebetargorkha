import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/Navbar.css"; // Your custom CSS
import "font-awesome/css/font-awesome.min.css"; // Font Awesome icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section: Logo */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src="logo.png" alt="Chhebetar Logo" />
          </Link>
        </div>

        {/* Center Section: Menu */}
        <div className="navbar-center">
          <ul className="navbar-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact and Social */}
        <div className="navbar-right">
          <div className="navbar-contact">
            <a href="tel:+342463">
              <i className="fas fa-phone"></i>
              <span>071-342463</span>
            </a>
            <a href="mailto:info@example.com">
              <i className="fas fa-envelope"></i>
              <span>infoChhebetar@gmail.com</span>
            </a>
          </div>

          <div className="navbar-social">
            <a href="#" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <button className="get-quote-btn">Get A Quote</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
