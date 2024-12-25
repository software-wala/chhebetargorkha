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
            <a href="tel: 064-430014">
              <i className="fa fa-phone"></i>
              <span>064-430014</span>
            </a>
            <a href="chhebetarcons@gmail.com">
              <i className="fa fa-envelope"></i>
              <span>chhebetarcons@gmail.com</span>
            </a>
          </div>

          <div className="navbar-social">
            <a href="#" target="_blank"></a>
            <a
              href="https://www.facebook.com/profile.php?id=100063784820343"
              target="_blank"
            >
              {" "}
              <i className="fa fa-facebook"></i>
            </a>
            <a href="tel:985-6088514" target="_blank">
              {" "}
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>

          <button className="get-quote-btn">Place Order</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
