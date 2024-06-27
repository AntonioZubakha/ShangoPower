import React, { useState } from 'react';
import './Feature.css';

const Feature = ({ id, title, content, images, video, reverse }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const totalItems = images.length + (video ? 1 : 0);
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalItems - 1);
  };

  const handleNext = () => {
    const totalItems = images.length + (video ? 1 : 0);
    setCurrentIndex((currentIndex + 1) % totalItems);
  };

  return (
    <section className={`feature ${reverse ? 'feature-reverse' : ''}`} id={id}>
      <div className="slider" id={`slider-${id}`}>
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {video && (
            <div className="slide" key="video">
              <video src={video} autoPlay loop muted className="slide-media" />
            </div>
          )}
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="slide-media" />
            </div>
          ))}
        </div>
        <div className="navigation">
          <button className="prev" onClick={handlePrev}>
            <img src="/icons/left-arrow.svg" alt="Previous" />
          </button>
          <button className="next" onClick={handleNext}>
            <img src="/icons/right-arrow.svg" alt="Next" />
          </button>
        </div>
      </div>
      <div className="feature-content">
        <h2 className="feature-title">{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default Feature;