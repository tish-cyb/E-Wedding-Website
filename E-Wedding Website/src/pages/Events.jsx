import React from 'react';
import '../styles/events.css';

function Events() {
  return (
    <section className="events-section">
      <h2>Wedding Events</h2>
      <div className="event-details">
        <div className="event-item">
          <h3>Ceremony</h3>
          <p>📅 Date: June 25, 2025</p>
          <p>🕒 Time: 3:00 PM</p>
          <p>📍 Venue: St. Mary’s Church, New York</p>
        </div>

        <div className="event-item">
          <h3>Reception</h3>
          <p>📅 Date: June 25, 2025</p>
          <p>🕒 Time: 6:00 PM</p>
          <p>📍 Venue: The Grand Ballroom, NYC Hotel</p>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Wedding Venue Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.92461817121!2d-73.98513088459215!3d40.7588967793266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ1JzMyLjAiTiA3M8KwNTknMDMuOSJX!5e0!3m2!1sen!2sus!4v1635457381117!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Events;
