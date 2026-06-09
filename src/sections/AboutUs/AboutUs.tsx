import React from 'react';
import Slider from '../../components/Slider/Slider';
import { Slide } from '../../types';
import Button from '../../components/Button/Button';
import './AboutUs.css';

const highlights = [
  'Shango Power is your consulting partner for renewable energy and sustainability solutions.',
  'We create added value in energy sustainability of your facility, no matter the task complexity or location.',
  'Our mission is to help our customers to become more environmentally friendly while reducing energy costs.',
];

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
      <div className="aboutus-slider" aria-hidden="true">
        <Slider slides={slides} showNav={false} />
      </div>

      <div className="aboutus-scrim" aria-hidden="true" />

      <div className="aboutus-content">
        <div className="aboutus-hero-panel">
          <div className="aboutus-eyebrow">
            <span className="aboutus-eyebrow-dot" />
            Renewable Energy Consulting
          </div>

          <h1 className="aboutus-title">
            Lower Costs,
            <span className="aboutus-title-accent"> Greener World</span>
          </h1>

          <ul className="aboutus-highlights">
            {highlights.map((text) => (
              <li key={text} className="aboutus-highlight">
                {text}
              </li>
            ))}
          </ul>

          <div className="aboutus-cta">
            <Button size="large" className="btn-on-dark" onClick={handleConsultationClick}>
              Request consultation
            </Button>
            <span className="aboutus-cta-note">Free initial assessment · 1 business day response</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
