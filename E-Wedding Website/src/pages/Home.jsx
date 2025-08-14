import React from 'react';
import '../Styles/home.css';

const Home = () => {
  return (
    <section className="home-hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Belle Weddings</h1>
        <p className="hero-subtitle">Bespoke Wedding Planners</p>
        <a href="#rsvp" className="hero-btn">RSVP</a>
      </div>
    </section>
  );
};

export default Home;
