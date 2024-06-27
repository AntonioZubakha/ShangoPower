import React, { useState } from 'react';
import './Portfolio.css';

const slides = [
  {
    image: 'images/portfolio1.jpeg',
    text: {
      industry: 'Sugar Production',
      location: 'East Europe',
      solution: 'Renewable Natural Gas',
      works: 'Technical Concept, Main Technical Solutions, Equipment Comparison'
    }
  },
  {
    image: 'images/portfolio2.jpeg',
    text: {
      industry: 'Lab-Grown Diamonds',
      location: 'East Europe',
      solution: 'Electricity Supply Optimization',
      works: 'MV Panel Room, Metering System, Ventilation System'
    }
  },
  {
    image: 'images/portfolio3.jpeg',
    text: {
      industry: 'Agriculture',
      location: 'Central Europe',
      solution: 'Renewable Natural Gas',
      works: 'Technical Concept, Main Technical Solutions, Equipment Comparison'
    }
  },
  {
    image: 'images/portfolio4.jpg',
    text: {
      industry: 'Biogas Facility + Electricity Generation',
      location: 'Eastern Europe',
      solution: 'Landfill + Generation System',
      works: 'Feasibility Study, Technical Concept, Equipment Comparison, Tender Management'
    }
  },
  {
    image: 'images/portfolio5.jpg',
    text: {
      industry: 'Industrial zone',
      location: 'Eastern Europe',
      solution: 'CHP-unit with steam production',
      works: 'Feasibility Study, Technical Concept, Equipment Comparison, Tender Management'
    }
  },
  {
    image: 'images/portfolio6.jpg',
    text: {
      industry: 'Household Appliance Manufacturing',
      location: 'Eastern Europe',
      solution: 'Green-CHP',
      works: 'Feasibility Study, CO2 Calculation'
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
      solution: 'Renuvable Natural Gas',
      works: 'Technical concept, Main technical solutions, Equipment selection'
    }
  }
];

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : slides.length - 1);
      setFade(false);
    }, 375); // Delay of 0.75 seconds before changing slide
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
      setFade(false);
    }, 375); // Delay of 0.75 seconds before changing slide
  };

  return (
    <section className="portfolio">
      <h2>Projects Portfolio</h2>
      <div className="portfolio-slider">
        <div className={`portfolio-slide ${fade ? 'fade-out' : 'fade-in'}`}>
          <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
          <div className="text-block">
            <p>Industry: {slides[currentIndex].text.industry}</p>
            <p>Location: {slides[currentIndex].text.location}</p>
            <p>Solution: {slides[currentIndex].text.solution}</p>
            <p>Works: {slides[currentIndex].text.works}</p>
          </div>
        </div>
        <button className="portfolio-prev" onClick={handlePrev}>
          <img src="/icons/left.png" alt="Previous" />
        </button>
        <button className="portfolio-next" onClick={handleNext}>
          <img src="/icons/right.png" alt="Next" />
        </button>
      </div>
    </section>
  );
}

export default Portfolio;