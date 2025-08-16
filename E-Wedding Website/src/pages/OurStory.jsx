import React, { useState, useEffect } from 'react';
import '../styles/ourstory.css';

const OurStory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Array of story photos - you'll replace these with your actual photo names
  const storyPhotos = [
    '/images/story-1.jpg',
    '/images/story-2.jpg',
    '/images/story-3.jpg',
    '/images/story-4.jpg',
    '/images/story-5.jpg'
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % storyPhotos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [storyPhotos.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('our-story')) {
              setIsVisible(true);
            } else if (entry.target.classList.contains('timeline-item')) {
              entry.target.classList.add('visible');
            } else if (entry.target.classList.contains('carousel-container')) {
              entry.target.classList.add('visible');
            } else if (entry.target.classList.contains('story-content')) {
              entry.target.classList.add('visible');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('our-story');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const carousel = document.querySelector('.carousel-container');
    const storyContent = document.querySelector('.story-content');
    
    if (section) observer.observe(section);
    if (carousel) observer.observe(carousel);
    if (storyContent) observer.observe(storyContent);
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % storyPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + storyPhotos.length) % storyPhotos.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="our-story" className={`our-story ${isVisible ? 'visible' : ''}`}>
      {/* Section Header */}
      <div className="story-header">
        <div className="header-content">
          <h2 className="story-title">Our Journey Together</h2>
          <div className="title-divider"></div>
          <p className="story-subtitle">
            Two hearts, one beautiful story
          </p>
        </div>
      </div>

      {/* Main Story Content */}
      <div className="story-container">
        {/* Photo Carousel */}
        <div className="carousel-section">
          <div className="carousel-container">
            <div className="carousel-wrapper">
              {storyPhotos.map((photo, index) => (
                <div 
                  key={index} 
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img 
                    src={photo} 
                    alt={`Our story ${index + 1}`}
                    className="story-image"
                  />
                </div>
              ))}
              
              {/* Navigation Arrows */}
              <button className="carousel-btn prev-btn" onClick={prevSlide}>
                <span>‹</span>
              </button>
              <button className="carousel-btn next-btn" onClick={nextSlide}>
                <span>›</span>
              </button>
            </div>
            
            {/* Carousel Progress Bar */}
            <div className="carousel-progress">
              {storyPhotos.map((_, index) => (
                <div
                  key={index}
                  className={`progress-line ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Story Text Content */}
        <div className="story-content">
          <div className="story-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">2017, How We Met</h3>
                <p className="timeline-text">
                  It was a beautiful autumn day when our paths first crossed. What started as a chance encounter became the beginning of our greatest adventure together.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">2018, First Date</h3>
                <p className="timeline-text">
                  Under the soft glow of city lights, we shared stories, laughter, and dreams. That night, we both knew something magical was beginning.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">2024, The Proposal</h3>
                <p className="timeline-text">
                  Surrounded by the places that held our memories, the question was asked and answered with tears of joy. Our journey to forever officially began.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">2025, Wedding Day</h3>
                <p className="timeline-text">
                  As we prepare to say "I do," we invite you to witness the next chapter of our love story. Thank you for being part of our journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="quote-section">
        <blockquote className="love-quote">
          <p>"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."</p>
          <cite>— Maya Angelou</cite>
        </blockquote>
      </div>
    </section>
  );
};

export default OurStory;