import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h4>About Us</h4>
          <p>
            We are a dedicated team delivering quality construction services. 
            Our mission is to build dreams into reality with excellence and precision.
          </p>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <i className="fa fa-clock-o"></i>
            <p>Sunday-Friday: 9am - 5pm</p>
          </div>
          <div className="contact-item">
            <i className="fa fa-envelope"></i>
            <p>chhebatar@gmail.com</p>
          </div>
          <div className="contact-item">
            <i className="fa fa-map-marker"></i>
            <p>Chhebetaar, Gorkha</p>
          </div>
        </div>
        <div className="footer-subscribe">
          <h4>Subscribe</h4>
          <p>Stay updated with the latest news and offers!</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="#" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2024 Chhebetaar Construction. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
