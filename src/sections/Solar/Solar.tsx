import React from 'react';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import { FeatureSection as FeatureSectionType } from '../../types';

const Solar: React.FC = () => {
  const feature: FeatureSectionType = {
    title: 'Solar Energy',
    content: `
      <p>Discover the power of solar energy with us! Not only does it reduce carbon emissions, but it also offers independence from traditional energy sources, fostering resilience in communities worldwide.</p>
      <p>At Shango Power, we evaluate the viability of solar solutions tailored to your needs, ensuring a brighter, cleaner future for generations to come.</p>
    `,
    slides: [
      {
        src: '/images/solar1.mp4',
        type: 'video',
        title: 'Solar Energy',
        description: 'Clean and renewable power',
      },
      {
        src: '/images/solar2.jpg',
        type: 'image',
        title: 'Solar Installation',
        description: 'Professional solar panel installation',
      },
      {
        src: '/images/solar3.jpg',
        type: 'image',
        title: 'Solar Farm',
        description: 'Large-scale solar energy generation',
      },
    ],
    reverse: true,
  };

  return <FeatureSection id="solar" feature={feature} backgroundColor="light" />;
};

export default Solar;

