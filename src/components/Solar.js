import React, { useState } from 'react';
import './Solar.css';

const Solar = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { 
      image: 'images/solar2.jpg', 
      title: 'Equipment Selection', 
      description: 'Cost-effective and best-in-class equipment supply.' 
    },
    { 
      image: 'images/solar3.jpg', 
      title: 'Project Management', 
      description: 'Professional and experienced energy project managers.' 
    },
    { 
      image: 'images/solar4.jpeg', 
      title: 'Customer Technical Service', 
      description: 'Most reliable solution provider choice and cost reduction.' 
    }
  ];
  
  const video = 'images/solar1.mp4';

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
    <section className="solar-feature" id={id}>
      <div className="solar-slider">
        <div className="solar-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {video && (
            <div className="solar-slide" key="video">
              <video src={video} autoPlay loop muted className="solar-slide-media" />
              <div className="solar-slide-overlay">
                <h3>Project development</h3>
                <p>High quality and in-time works and services.</p>
              </div>
            </div>
          )}
          {slides.map((slide, index) => (
            <div className="solar-slide" key={index}>
              <img src={slide.image} alt={`Slide ${index + 1}`} className="solar-slide-media" />
              <div className="solar-slide-overlay">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="solar-navigation">
          <button className="solar-prev" onClick={handlePrev}>
            <div className="nav-button-background">
              <img src="./icons/left.png" alt="Previous" />
            </div>
          </button>
          <button className="solar-next" onClick={handleNext}>
            <div className="nav-button-background">
              <img src="./icons/right.png" alt="Next" />
            </div>
          </button>
        </div>
      </div>
      <div className="solar-feature-content">
        <h2 className="solar-feature-title">Solar Energy</h2>
        <p>Discover the power of solar energy with us! Not only does it reduce carbon emissions, but it also offers independence from traditional energy sources, fostering resilience in communities worldwide.</p>
        <p>At Shango Power, we evaluate the viability of solar solutions tailored to your needs, ensuring a brighter, cleaner future for generations to come.</p>
        <div className="solar-download-btn">
          <button onClick={scrollToConsultation}>Request a consultation</button>
        </div>
      </div>
    </section>
  );
};

export default Solar;