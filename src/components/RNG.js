import React, { useState } from 'react';
import './RNG.css';

const RNG = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { 
      image: 'images/rng2.jpeg', 
      title: 'Project evaluating and dimensioning', 
      description: 'Selecting the Most Suitable Technology for Biogas Upgrading Projects.' 
    },
    { 
      image: 'images/rng3.jpeg', 
      title: 'Solution analysis', 
      description: 'Choosing the Highest efficiency Technologies for RNG and CO2 Liquefaction including the cost optimization.' 
    },
    { 
      image: 'images/rng4.jpg', 
      title: 'Green Hydrogen and E-methane', 
      description: 'Incorporating cutting-edge technologies for your green projects' 
    }
  ];
  
  const video = 'images/rng1.mp4';

  const handlePrev = () => {
    const totalItems = slides.length + (video ? 1 : 0);
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalItems - 1);
  };

  const handleNext = () => {
    const totalItems = slides.length + (video ? 1 : 0);
    setCurrentIndex((currentIndex + 1) % totalItems);
  };

  const scrollToConsultation = () => {
    const consultationElement = document.getElementById('consultation');
    if (consultationElement) {
      consultationElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="RNG-feature" id={id}>
      <div className="RNG-slider">
        <div className="RNG-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {video && (
            <div className="RNG-slide" key="video">
              <video src={video} autoPlay loop muted className="RNG-slide-media" />
              <div className="RNG-slide-overlay">
                <h3>Technology Selection and Project Concept Creation</h3>
                <p>From waste to RNG off-take.</p>
              </div>
            </div>
          )}
          {slides.map((slide, index) => (
            <div className="RNG-slide" key={index}>
              <img src={slide.image} alt={`Slide ${index + 1}`} className="RNG-slide-media" />
              <div className="RNG-slide-overlay">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="RNG-navigation">
          <button className="RNG-prev" onClick={handlePrev}>
            <div className="nav-button-background">
              <img src="./icons/left.png" alt="Previous" />
            </div>
          </button>
          <button className="RNG-next" onClick={handleNext}>
            <div className="nav-button-background">
              <img src="./icons/right.png" alt="Next" />
            </div>
          </button>
        </div>
      </div>
      <div className="RNG-feature-content">
        <h2 className="RNG-feature-title">RNG Energy</h2>
        <p>Go into the biogas upgrading and liquefaction process with Shango Power!</p>
        <p>Using advanced technology, biogas is efficiently purified by removing impurities and carbon dioxide, resulting in high-quality biomethane.</p>
        <p>Our solution ensures optimal performance, energy efficiency, and compliance with environmental standards, supporting the transition to renewable energy.</p>
        <div className="RNG-download-btn">
          <button onClick={scrollToConsultation}>Request a consultation</button>
        </div>
      </div>
    </section>
  );
};

export default RNG;