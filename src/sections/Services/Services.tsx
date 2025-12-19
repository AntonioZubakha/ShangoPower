import React, { useEffect } from 'react';
import './Services.css';
import { observeElements } from '../../utils/scrollAnimations';

const Services: React.FC = () => {
  useEffect(() => {
    const cleanup = observeElements('.service-card', {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    });

    return cleanup;
  }, []);

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Services</h2>
      <div className="services-grid">
        <div
          className="service-card card-animate"
          onClick={() => scrollToService('lab-grown')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              scrollToService('lab-grown');
            }
          }}
        >
          <h3>Feasibility studies and calculations</h3>
        </div>
        <div
          className="service-card card-animate"
          onClick={() => scrollToService('solar')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              scrollToService('solar');
            }
          }}
        >
          <h3>Technical concepts</h3>
        </div>
        <div
          className="service-card card-animate"
          onClick={() => scrollToService('chp')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              scrollToService('chp');
            }
          }}
        >
          <h3>Equipment selection</h3>
        </div>
        <div
            className="service-card card-animate"
          onClick={() => scrollToService('rng')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
              scrollToService('rng');
              }
            }}
          >
          <h3>Sustainability consulting</h3>
          </div>
      </div>
    </section>
  );
};

export default Services;

