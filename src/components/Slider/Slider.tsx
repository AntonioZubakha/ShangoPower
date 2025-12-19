import React, { useState, useEffect } from 'react';
import { Slide } from '../../types';
import './Slider.css';
import leftArrow from '../../assets/icons/left.png';
import rightArrow from '../../assets/icons/right.png';

interface SliderProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showNav?: boolean;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  slides,
  autoPlay = false,
  autoPlayInterval = 5000,
  showNav = true,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) return null;

  const slideWidth = slides.length > 0 ? 100 / slides.length : 100;
  const contentWidth = `${slides.length * 100}%`;

  return (
    <div className={`slider ${className}`}>
      <div className="slider-wrapper">
        <div
          className="slider-content"
          style={{
            width: contentWidth,
            transform: `translateX(-${currentIndex * slideWidth}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slider-slide"
              style={{
                flex: `0 0 ${slideWidth}%`,
                minWidth: `${slideWidth}%`,
                maxWidth: `${slideWidth}%`,
              }}
            >
              {slide.type === 'video' ? (
                <video
                  className="slider-media"
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  className="slider-media"
                  src={slide.src}
                  alt={slide.title || `Slide ${index + 1}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              )}
              {(slide.title || slide.description) && (
                <div className="slider-overlay">
                  {slide.title && <h3>{slide.title}</h3>}
                  {slide.description && <p>{slide.description}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showNav && slides.length > 1 && (
        <>
          <button
            className="slider-nav slider-prev"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <div className="nav-button-background">
              <img src={leftArrow} alt="Previous" />
            </div>
          </button>
          <button
            className="slider-nav slider-next"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <div className="nav-button-background">
              <img src={rightArrow} alt="Next" />
            </div>
          </button>
        </>
      )}

      {slides.length > 1 && (
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;

