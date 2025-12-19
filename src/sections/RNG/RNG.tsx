import React from 'react';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import { FeatureSection as FeatureSectionType } from '../../types';

const RNG: React.FC = () => {
  const feature: FeatureSectionType = {
    title: 'RNG Energy',
    content: `
      <p>Go into the biogas upgrading and liquefaction process with Shango Power!</p>
      <p>Using advanced technology, biogas is efficiently purified by removing impurities and carbon dioxide, resulting in high-quality biomethane.</p>
      <p>Our solution ensures optimal performance, energy efficiency, and compliance with environmental standards, supporting the transition to renewable energy.</p>
    `,
    slides: [
      {
        src: '/images/rng1.mp4',
        type: 'video',
        title: 'Technology Selection and Project Concept Creation',
        description: 'From waste to RNG off-take.',
      },
      {
        src: '/images/rng2.jpeg',
        type: 'image',
        title: 'Project evaluating and dimensioning',
        description: 'Selecting the Most Suitable Technology for Biogas Upgrading Projects.',
      },
      {
        src: '/images/rng3.jpeg',
        type: 'image',
        title: 'Solution analysis',
        description: 'Choosing the Highest efficiency Technologies for RNG and CO2 Liquefaction including the cost optimization.',
      },
      {
        src: '/images/rng4.jpg',
        type: 'image',
        title: 'Green Hydrogen and E-methane',
        description: 'Incorporating cutting-edge technologies for your green projects',
      },
    ],
    reverse: true,
  };

  return <FeatureSection id="rng" feature={feature} backgroundColor="light" />;
};

export default RNG;

