import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './Labgrown.css';

const Labgrown = forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { 
      image: 'images/ppp.jpg', 
      title: 'Cost reduction', 
      description: 'Strategies in the energy costs reduction for the Lab-Grown Diamonds production facilities.'
    },
    { 
      image: 'images/lg3.jpeg', 
      title: 'Certification', 
      description: 'Consulting in the green energy and sustainable production certificates including SCS.' 
    },
    { 
      image: 'images/lg4.jpeg', 
      title: 'Technical and Economic consulting', 
      description: 'Feasibility studies, technical supervision and technical concepts.' 
    }
  ];

  const video = { 
    src: 'images/lg1.mp4',
    title: 'Technical solutions', 
    description: 'Concepts for the Lab-Grown production facilities energy supply.'
  };

  const handlePrev = () => {
    const totalItems = slides.length + (video ? 1 : 0);
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalItems - 1);
  };

  const handleNext = () => {
    const totalItems = slides.length + (video ? 1 : 0);
    setCurrentIndex((currentIndex + 1) % totalItems);
  };

  useImperativeHandle(ref, () => ({
    scrollToConsultationButton() {
      document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
    }
  }));

  const scrollToConsultation = () => {
    document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`labgrown-feature ${props.id === 'reverse' ? 'reverse' : ''}`} id={props.id}>
      <div className="labgrown-feature-content">
        <h2 className="labgrown-feature-title">Energy For Lab-Grown Diamonds</h2>
        <p>With huge experience in Lab-Grown Diamonds we are embracing all the aspects of renewable energy transformation and sustainability certification for any kind of Lab-Grown Diamonds producer.</p>
        <p>With our team of experts, you can confidently evaluate all technical and economic aspects, ensuring that the chosen solution is both efficient and cost-effective.</p>
        <div className="labgrown-download-btn">
          <button onClick={scrollToConsultation}>Request a consultation</button>
        </div>
      </div>
      <div className="labgrown-slider">
        <div className="labgrown-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {video && (
            <div className="labgrown-slide" key="video">
              <video 
                src={video.src} 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
                className="labgrown-slide-media" 
              />
              <div className="labgrown-slide-overlay">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          )}
          {slides.map((slide, index) => (
            <div className="labgrown-slide" key={index}>
              <img src={slide.image} alt={`Slide ${index + 1}`} className="labgrown-slide-media" />
              <div className="labgrown-slide-overlay">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="labgrown-navigation">
          <button className="labgrown-prev" onClick={handlePrev}>
            <div className="nav-button-background">
              <img src="./icons/left.png" alt="Previous" />
            </div>
          </button>
          <button className="labgrown-next" onClick={handleNext}>
            <div className="nav-button-background">
              <img src="./icons/right.png" alt="Next" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
});

export default Labgrown;