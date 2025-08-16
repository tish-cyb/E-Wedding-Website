import React, { useEffect } from "react";
import "../Styles/registry.css";

function RegistrySection() {
  useEffect(() => {
    // Select the heading, paragraph, and all flip-cards
    const elements = document.querySelectorAll(".registry-section > h2, .registry-section > p, .flip-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="registry-section" id="registry">
      <h2>Gift Registry</h2>
      <div className="title-divider"></div>
      <p>Choose your favorite gifts from our curated registries!</p>

      {/* Three interactive flip registry cards */}
      <div className="registry-cards">
        {/* Amazon */}
        <div className="registry-card flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>Amazon Registry</h3>
              <p>Find amazing gifts and contribute to our special day.</p>
            </div>
            <div className="flip-card-back">
              <a
                href="https://www.amazon.com/wedding"
                target="_blank"
                rel="noreferrer"
                className="registry-link"
              >
                Visit Amazon
              </a>
            </div>
          </div>
        </div>

        {/* Target */}
        <div className="registry-card flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>Target Registry</h3>
              <p>Choose from our selected items at Target to celebrate with us.</p>
            </div>
            <div className="flip-card-back">
              <a
                href="https://www.target.com/gift-registry"
                target="_blank"
                rel="noreferrer"
                className="registry-link"
              >
                Visit Target
              </a>
            </div>
          </div>
        </div>

        {/* Local Boutique */}
        <div className="registry-card flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>Local Boutique</h3>
              <p>Support our favorite local shops and pick unique gifts.</p>
            </div>
            <div className="flip-card-back">
              <a
                href="https://www.localboutique.com/registry"
                target="_blank"
                rel="noreferrer"
                className="registry-link"
              >
                Visit Boutique
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrySection;
