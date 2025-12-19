import React from 'react';
import Slider from '../../components/Slider/Slider';
import { Slide } from '../../types';
import Button from '../../components/Button/Button';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  const slides: Slide[] = [
    {
      src: '/images/aboutus.mp4',
      type: 'video',
    },
  ];

  const handleConsultationClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about-us" className="aboutus-section">
      <div className="aboutus-slider">
        <Slider slides={slides} showNav={false} />
      </div>
      <div className="aboutus-content">
        <h2 className="aboutus-title">
          Lower Costs, Greener World
        </h2>
        <div className="aboutus-items-container">
          <div className="aboutus-item">
            <p className="aboutus-item-text">
              Shango Power is your consulting partner for renewable energy and sustainability solutions.
            </p>
          </div>
          <div className="aboutus-item">
            <p className="aboutus-item-text">
              We create added value in energy sustainability of your facility, no matter the task complexity or location.
            </p>
          </div>
          <div className="aboutus-item">
            <p className="aboutus-item-text">
              Our mission is to help our customers to become more environmentally friendly while reducing energy costs.
            </p>
          </div>
        </div>
        <div className="aboutus-cta">
          <Button size="large" className="btn-on-dark" onClick={handleConsultationClick}>
            Request consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

