import React, { useState } from "react";
import "../Styles/rsvp.css";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("RSVP Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", attending: "yes", message: "" });

    // Automatically hide popup after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 10000);
  };

  return (
    <section className="rsvp-section" id="rsvp">
      <div className="rsvp-header">
        <h2>RSVP</h2>
        <p>We’d love to know if you can celebrate with us!</p>
      </div>

      <form className="rsvp-form" onSubmit={handleSubmit}>
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

        <label>
          <span>*</span>
          Number of guests
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          >
            <option value="me">Only Me</option>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
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
            <option value="ceremony">Wedding Ceremony</option>
            <option value="party">Wedding Party</option>
            <option value="accommodation">Accommodations</option>
          </select>
        </label>

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
        <div className="success-popup">
            Thank you for your RSVP! We can’t wait to see you there!
          <br />
          <button onClick={() => setSubmitted(false)}>Close</button>
        </div>
      )}
    </section>
  );
};

export default RSVP;
