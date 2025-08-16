// Footer.jsx
import React from "react";
import "../Styles/Footer.css";


const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">

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
            </a>
          </div>
        </div>

        {/* Quick Links */}
         <div className="footer-links">
          <h3>Quick Links</h3>
          <table>
            <tr>
              <td><a href="#home">Home</a></td>
              <td><a href="#our-story">Our Story</a></td>
              <td><a href="#events">Events</a></td>
            </tr>
            <tr>
              <td><a href="#rsvp">RSVP</a></td>
              <td><a href="#gallery">Gallery</a></td>
              <td><a href="#registry">Registry</a></td>
            </tr>
          </table>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>📧 admin@jaehubservices.com</p>
          <p>📞 +63-956-150-9151</p>
          <p>📍 Unit 1015 Winland Tower Tomas Morato, Quezon City</p>
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
