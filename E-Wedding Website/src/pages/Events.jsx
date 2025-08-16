import React, { useState, useEffect } from 'react';
import '../styles/events.css';

const eventsData = [
  { title: "Pre-Wedding Ceremony", time: "4 PM", location: "Okada Manila" },
  { title: "Main Wedding Ceremony", time: "6 PM", location: "Crystal Pavilion, Okada Manila" },
  { title: "Wedding Reception", time: "7 PM", location: "Grand Ballroom, Okada Manila" },
  { title: "After-Party", time: "10 PM", location: "Okada Manila Sky Bar" },
];

function Events() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShow(true);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 } 
    );

    const section = document.getElementById('events');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <section className={`wedding-events ${show ? 'show' : ''}`} id="events">
      <div className="overlay"></div>
      <div className="content">

        
        <div className={`events-header ${show ? 'show' : ''}`}>
          <h1>Timeline Events</h1>
          <div className="title-divider"></div>
          <p>Join us as we celebrate our special day</p>
        </div>

       
        <div className={`schedule ${show ? 'show' : ''}`}>
          {eventsData.map((event, index) => (
            <div 
              key={index} 
              className={`event-card ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="card-header">
                {event.title}
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className="card-body">
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
              </div>
            </div>
          ))}
        </div>

  <div className={`invitation-map ${show ? 'show' : ''}`}>
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931.2311608264456!2d120.97996215552124!3d14.515527604259752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cdb9f25aa7b9%3A0x5a5d4fd070c78502!2sCrystal%20Pavilion%2C%20Okada%20Manila!5e0!3m2!1sen!2sph!4v1754991333390!5m2!1sen!2sph"
        allowFullScreen
        loading="lazy">
      </iframe>
    </div>
  </div>

      </div>
    </section>
  );
}

export default Events;
