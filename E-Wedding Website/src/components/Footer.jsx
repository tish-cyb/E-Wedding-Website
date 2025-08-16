// Footer.jsx
import React from "react";
import "../Styles/Footer.css";


const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
<<<<<<< HEAD

        {/* Logo + Social */}
        <div className="footer-logo">
          <a 
            href="https://jaehubservices.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/logos/jaehub-logo.png"
              alt="JAE Hub Logo"
            />
          </a>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="YouTube"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
              />
=======
        
        {/* Brand Section */}
        <div className="footer-brand">
          <img src="/jaehub-logo.png" alt="JAE Hub Logo" className="footer-logo" />
          <p className="brand-tagline">Just About Everything</p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
>>>>>>> 6a59c94c638dcf11642fcdfecf093c5596b55a6d
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <i className="fas fa-chevron-right"></i>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
              <a href="#">Our Story</a>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
              <a href="#">Events</a>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
              <a href="#">RSVP</a>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
              <a href="#">Gallery</a>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
              <a href="#">Registry</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Info</h3>
<<<<<<< HEAD
          <p>📧 admin@jaehubservices.com</p>
          <p>📞 +63-956-150-9151</p>
          <p>📍 Unit 1015 Winland Tower Tomas Morato, Quezon City</p>
=======
          <p>
            <i className="fas fa-envelope"></i>
            admin@jaehubservices.com
          </p>
          <p>
            <i className="fas fa-phone"></i>
            +63-956-150-9151
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            Unit 1015 Winland Tower Tomas Morato, Kristong Hari Quezon City 1101
          </p>
>>>>>>> 6a59c94c638dcf11642fcdfecf093c5596b55a6d
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 JAE Hub Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
