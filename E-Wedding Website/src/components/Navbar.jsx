import React, { useEffect, useState } from 'react';
import logo from '../assets/logos/jaehub-logo.png';
import '../Styles/navigation.css';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${showNav ? 'visible' : 'hidden'}`}>
      <div className="nav-logo">
        <a href="#home">
          <img src={logo} alt="Tiffany Logo" className="logo-img" />
        </a>
      </div>
      <div className="nav-links">
        <a href="#home">
          <span className="rotate-text">
            <span className="rotate-word word-1">Home</span>
            <span className="rotate-word word-2">Home</span>
          </span>
        </a>
        <a href="#our-story">
          <span className="rotate-text">
            <span className="rotate-word word-1">Our Story</span>
            <span className="rotate-word word-2">Our Story</span>
          </span>
        </a>
        <a href="#events">
          <span className="rotate-text">
            <span className="rotate-word word-1">Events</span>
            <span className="rotate-word word-2">Events</span>
          </span>
        </a>
        <a href="#rsvp">
          <span className="rotate-text">
            <span className="rotate-word word-1">RSVP</span>
            <span className="rotate-word word-2">RSVP</span>
          </span>
        </a>
        <a href="#gallery">
          <span className="rotate-text">
            <span className="rotate-word word-1">Gallery</span>
            <span className="rotate-word word-2">Gallery</span>
          </span>
        </a>
        <a href="#registry">
          <span className="rotate-text">
            <span className="rotate-word word-1">Registry</span>
            <span className="rotate-word word-2">Registry</span>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
