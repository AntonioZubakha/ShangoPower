import React from 'react';
import Slider from '../../components/Slider/Slider';
import { Slide } from '../../types';
import { PORTFOLIO_ITEMS } from '../../constants/data';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const slides: Slide[] = PORTFOLIO_ITEMS.map((item) => ({
    src: item.image,
    title: item.title,
    description: item.description.replace(/\n/g, '\n'),
    type: 'image',
  }));

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <div className="portfolio-content">
        <div className="portfolio-slider-wrapper">
          <Slider slides={slides} className="portfolio-slider" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

