import React from 'react';
import Slider from '../Slider/Slider';
import Button from '../Button/Button';
import { FeatureSection as FeatureSectionType } from '../../types';
import './FeatureSection.css';

interface FeatureSectionProps {
  id: string;
  feature: FeatureSectionType;
  backgroundColor?: 'light' | 'dark';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  feature,
  backgroundColor = 'light',
}) => {
  const handleRequestConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id={id}
      className={`feature-section ${backgroundColor === 'dark' ? 'dark' : 'light'} ${feature.reverse ? 'reverse' : ''}`}
    >
      <div className="feature-content">
        <h2 className="feature-title">{feature.title}</h2>
        <div
          className="feature-text"
          dangerouslySetInnerHTML={{ __html: feature.content }}
        />
        <div className="feature-download">
          <Button onClick={handleRequestConsultation}>Request a consultation</Button>
        </div>
      </div>
      <div className="feature-slider">
        <Slider slides={feature.slides} />
      </div>
    </section>
  );
};

export default FeatureSection;

