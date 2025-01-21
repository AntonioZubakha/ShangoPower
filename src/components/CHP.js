import React, { useState } from 'react';
import './CHP.css';

const CHP = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { 
      image: 'images/chp2.jpg', 
      title: 'Equipment Selection and Tender management', 
      description: 'Optimizing performance and efficiency.'
    },
    { 
      image: 'images/chp3.jpeg',
      title: 'Project Development', 
      description: 'Project development for Landfill/Wastewater/MSW cogeneration.' 
    },
    { 
      image: 'images/chp4.jpeg', 
      title: 'Feasibility study and pay-back calculation', 
      description: 'Maximizing the project\'s efficiency and profitability. Thorough assessment and dimensioning.' 
    }
  ];

  const video = { 
    src: 'images/chp1.mp4', 
    title: 'Technical Investigation and Concept Design', 
    description: 'Maximizing energy efficiency while reducing CAPEX and OPEX.'
  };

  const handlePrev = () => {
    const totalItems = slides.length + (video ? 1 : 0);
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalItems - 1);
  };

  const handleNext = () => {
    const totalItems = slides.length + (video ? 1 : 0);
    setCurrentIndex((currentIndex + 1) % totalItems);
  };

  const scrollToConsultation = () => {
    document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`CHP-feature ${id === 'reverse' ? 'reverse' : ''}`} id={id}>
      <div className="CHP-feature-content">
        <h2 className="CHP-feature-title">Combined Heat and Power</h2>
        <p>Explore the game-changing efficiency of Combined Heat and Power (CHP) solutions with Shango Power!</p>
        <p>CHP maximizes energy efficiency and reduces costs by generating electricity and using waste heat simultaneously, offering significant savings and environmental benefits.</p>
        <p>At Shango Power, we specialize in optimizing CHP solutions tailored to your business needs, ensuring a sustainable energy future.</p>
        <div className="CHP-download-btn">
          <button onClick={scrollToConsultation}>Request a consultation</button>
        </div>
      </div>
      <div className="CHP-slider">
        <div className="CHP-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {video && (
            <div className="CHP-slide" key="video">
              <video 
                src={video.src} 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
                className="CHP-slide-media" 
              />
              <div className="CHP-slide-overlay">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          )}
          {slides.map((slide, index) => (
            <div className="CHP-slide" key={index}>
              <img src={slide.image} alt={`Slide ${index + 1}`} className="CHP-slide-media" />
              <div className="CHP-slide-overlay">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="CHP-navigation">
          <button className="CHP-prev" onClick={handlePrev}>
            <div className="nav-button-background">
              <img src="./icons/left.png" alt="Previous" />
            </div>
          </button>
          <button className="CHP-next" onClick={handleNext}>
            <div className="nav-button-background">
              <img src="./icons/right.png" alt="Next" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CHP;