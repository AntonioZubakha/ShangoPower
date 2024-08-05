import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './Portfolio.css';

const Portfolio = forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: 'images/portfolio1.jpeg',
      text: {
        industry: 'Sugar production',
        location: 'East Europe',
        solution: 'Renewable natural gas',
        works: 'Technical concept, Main technical solutions, Equipment comparison'
      }
    },
    {
      image: 'images/ppp.jpg',
      text: {
        industry: 'Lab-grown diamonds',
        location: 'East Europe',
        solution: 'Electricity supply optimization',
        works: 'MV panel room, Metering system, Ventilation system'
      }
    },
    {
      image: 'images/portfolio3.jpeg',
      text: {
        industry: 'Agriculture',
        location: 'Central Europe',
        solution: 'Renewable natural gas',
        works: 'Technical concept, Main technical solutions, Equipment comparison'
      }
    },
    {
      image: 'images/portfolio4.jpg',
      text: {
        industry: 'Biogas facility + electricity generation',
        location: 'Eastern Europe',
        solution: 'Landfill + generation system',
        works: 'Feasibility study, Technical concept, Equipment comparison, Tender management'
      }
    },
    {
      image: 'images/portfolio5.jpg',
      text: {
        industry: 'Industrial zone',
        location: 'Eastern Europe',
        solution: 'CHP-unit with steam production',
        works: 'Feasibility study, Technical concept, Equipment comparison, Tender management'
      }
    },
    {
      image: 'images/portfolio6.jpg',
      text: {
        industry: 'Household appliance manufacturing',
        location: 'Eastern Europe',
        solution: 'Green-CHP',
        works: 'Feasibility study, CO2 calculation'
      }
    },
    {
      image: 'images/portfolio7.jpg',
      text: {
        industry: 'Greenhouse',
        location: 'Eastern Europe',
        solution: 'CHP units with CO2 purification system',
        works: 'Greenfield project development, Technical concept, Equipment selection'
      }
    },
    {
      image: 'images/portfolio8.jpeg',
      text: {
        industry: 'Agriculture',
        location: 'Northern Europe',
        solution: 'Renewable natural gas',
        works: 'Technical concept, Main technical solutions, Equipment selection'
      }
    }
  ];

  const handlePrev = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : slides.length - 1);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  useImperativeHandle(ref, () => ({
    scrollToConsultationButton() {
      document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
    }
  }));

  return (
    <section className="portfolio" id={props.id}>
      <div className="portfolio-content">
        <h2 className="portfolio-title">Portfolio</h2>
        <div className="portfolio-slider">
          <div className="portfolio-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <div className="portfolio-slide" key={index}>
                <img src={slide.image} alt={`Slide ${index + 1}`} />
                <div className="text-block">
                  <p><strong>Industry:</strong> {slide.text.industry}</p>
                  <p><strong>Location:</strong> {slide.text.location}</p>
                  <p><strong>Solution:</strong> {slide.text.solution}</p>
                  <p><strong>Works:</strong> {slide.text.works}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio-navigation">
            <button className="portfolio-prev" onClick={handlePrev}>
              <div className="nav-button-background">
                <img src="./icons/left.png" alt="Previous" />
              </div>
            </button>
            <button className="portfolio-next" onClick={handleNext}>
              <div className="nav-button-background">
                <img src="./icons/right.png" alt="Next" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;