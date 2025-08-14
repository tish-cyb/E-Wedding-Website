import React, { useEffect, useState } from 'react';
import logo from '../assets/logos/jaehub-logo.png';
import '../Styles/navigation.css';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

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

  // Close menu when resizing above mobile size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`nav ${showNav ? 'visible' : 'hidden'}`}>
      <div className="nav-logo">
        <a href="#home">
          <img src={logo} alt="Tiffany Logo" className="logo-img" />
        </a>
      </div>

      {/* Hamburger icon */}
      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          <span className="rotate-text">
            <span className="rotate-word word-1">Home</span>
            <span className="rotate-word word-2">Home</span>
          </span>
        </a>
        <a href="#our-story" onClick={() => setMenuOpen(false)}>
          <span className="rotate-text">
            <span className="rotate-word word-1">Our Story</span>
            <span className="rotate-word word-2">Our Story</span>
          </span>
        </a>
        <a href="#events" onClick={() => setMenuOpen(false)}>
          <span className="rotate-text">
            <span className="rotate-word word-1">Events</span>
            <span className="rotate-word word-2">Events</span>
          </span>
        </a>
        <a href="#rsvp" onClick={() => setMenuOpen(false)}>
          <span className="rotate-text">
            <span className="rotate-word word-1">RSVP</span>
            <span className="rotate-word word-2">RSVP</span>
          </span>
        </a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>
          <span className="rotate-text">
            <span className="rotate-word word-1">Gallery</span>
            <span className="rotate-word word-2">Gallery</span>
          </span>
        </a>
        <a href="#registry" onClick={() => setMenuOpen(false)}>
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
