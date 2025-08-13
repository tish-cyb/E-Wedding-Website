import React from 'react';
import '../styles/events.css';

function Events() {
  return (
    <section class="wedding-events">
  <div class="overlay"></div>

  <div class="content">
    <!-- Left side: Schedule -->
    <div class="schedule">
      <div class="event-card">
        <h3>Event:</h3>
        <p>Attend the Pre-Wedding Ceremony</p>
        <h3>Time:</h3>
        <p>4 PM</p>
        <h3>Location:</h3>
        <p>Okada Manila</p>
      </div>

      <div class="event-card">
        <h3>Event:</h3>
        <p>Main Wedding Ceremony</p>
        <h3>Time:</h3>
        <p>6 PM</p>
        <h3>Location:</h3>
        <p>Crystal Pavilion, Okada Manila</p>
      </div>

      <div class="event-card">
        <h3>Event:</h3>
        <p>Wedding Reception</p>
        <h3>Time:</h3>
        <p>7 PM</p>
        <h3>Location:</h3>
        <p>Grand Ballroom, Okada Manila</p>
      </div>

      <div class="event-card">
        <h3>Event:</h3>
        <p>After-Party</p>
        <h3>Time:</h3>
        <p>10 PM</p>
        <h3>Location:</h3>
        <p>Okada Manila Sky Bar</p>
      </div>
    </div>

    <!-- Right side: Invitation + Map -->
    <div class="invitation">
      <h2>You're Invited!</h2>
      <p>
        We are delighted to invite you to celebrate our wedding in the heart of elegance — the <strong>Crystal Pavilion at Okada Manila</strong>. Our theme for the evening is <strong>Regency</strong>, where timeless grace meets modern charm. 
      </p>
      <p>
        Please join us in semi-formal attire as we exchange our vows and share this joyous moment with you. We can’t wait to welcome you to our special day filled with love, laughter, and unforgettable memories. 
      </p>
      <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931.2311608264456!2d120.97996215552124!3d14.515527604259752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cdb9f25aa7b9%3A0x5a5d4fd070c78502!2sCrystal%20Pavilion%2C%20Okada%20Manila!5e0!3m2!1sen!2sph!4v1754991333390!5m2!1sen!2sph"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy">
      </iframe>
      </div>
    </div>
  </div>
</section>
  );
}

export default Events;
