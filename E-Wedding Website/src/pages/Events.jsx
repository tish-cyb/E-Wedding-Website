import React from 'react';
import '../styles/events.css';

function Events() {
  return (
    <section className="events-section">
      <h2>Wedding Events</h2>
      <div className="event-details">
        <div className="event-item">
          <h3>Ceremony</h3>
          <p>📅 Date: February 14, 2026</p>
          <p>🕒 Time: 3:00 PM</p>
          <p>📍 Venue: St. Patrick’s Cathedral, New York</p>
        </div>

        <div className="event-item">
          <h3>Reception</h3>
          <p>📅 Date: February 14, 2026</p>
          <p>🕒 Time: 6:00 PM</p>
          <p>📍 Venue: Hyatt Grand Central, New York</p>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Wedding Venue Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12088.620690419166!2d-73.98966880453197!3d40.758611699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fc102f6e51%3A0x88603435e036aa5b!2sSt.%20Patrick&#39;s%20Cathedral!5e0!3m2!1sen!2sph!4v1754903005367!5m2!1sen!2sph"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="map-container">
        <iframe
          title="Wedding Reception Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12088.469861417292!2d-73.99269316173695!3d40.75944109539077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259022d712db1%3A0x500317cc3cc9f519!2sHyatt%20Grand%20Central%20New%20York!5e0!3m2!1sen!2sph!4v1754903706444!5m2!1sen!2sph"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Events;
