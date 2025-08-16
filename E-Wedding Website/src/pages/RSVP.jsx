import React, { useState, useRef, useEffect } from "react";
import "../Styles/rsvp.css";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "all",
    guests: "me",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // for popup fade-out

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false); // for scroll animation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("RSVP Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", attending: "all", guests: "me", message: "" });
  };

  // function to handle fade-out when closing popup
  const handleClosePopup = () => {
    setFadeOut(true);
    setTimeout(() => {
      setSubmitted(false); // hide popup after animation
      setFadeOut(false);   // reset fadeOut
    }, 300); // duration matches CSS animation
  };
  
  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // animate in
          observer.unobserve(entry.target); // stop observing after first trigger
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      className={`rsvp-section ${visible ? "animate" : ""}`} 
      ref={sectionRef} 
      id="rsvp"
    >
      <div className="rsvp-header">
        <h2>RSVP</h2>
        <div className="divider"></div>
        <p>We’d love to know if you can celebrate with us!</p>
      </div>

      <form className="rsvp-form" onSubmit={handleSubmit}>
        <div className="row1">
          <label>
            <span>*</span>
            Full Name
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>*</span>
            Email Address
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="row2">
          <label>
            <span>*</span>
            Will you be attending?
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="me">Only Me</option>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
              <option value="five">5</option>
            </select>
          </label>

          <label>
            <span>*</span>
            Will you be attending?
            <select
              name="attending"
              value={formData.attending}
              onChange={handleChange}
            >
              <option value="all">All</option>
              <option value="prewedding">Pre-Wedding Ceremony</option>
              <option value="mainwedding">Main Wedding Ceremony</option>
              <option value="weddingreception">Wedding Reception</option>
              <option value="afterparty">After-Party</option>
            </select>
          </label>
        </div>

        <label>
          Message
          <textarea
            name="message"
            placeholder="Any notes or dietary needs?"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>

      {submitted && (
        <div className={`success-popup ${fadeOut ? "fade-out" : ""}`}>
          Thank you for your RSVP! We can’t wait to see you there!
          <br />
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </section>
  );
};

export default RSVP;
