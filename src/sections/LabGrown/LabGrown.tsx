import React from 'react';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import { FeatureSection as FeatureSectionType } from '../../types';

const LabGrown: React.FC = () => {
  const feature: FeatureSectionType = {
    title: 'Energy For Lab-Grown Diamonds',
    content: `
      <p>With huge experience in Lab-Grown Diamonds we are embracing all the aspects of renewable energy transformation and sustainability certification for any kind of Lab-Grown Diamonds producer.</p>
      <p>With our team of experts, you can confidently evaluate all technical and economic aspects, ensuring that the chosen solution is both efficient and cost-effective.</p>
    `,
    slides: [
      {
        src: '/images/lg1.mp4',
        type: 'video',
        title: 'Technical solutions',
        description: 'Concepts for the Lab-Grown production facilities energy supply.',
      },
      {
        src: '/images/lg2.jpeg',
        type: 'image',
        title: 'Cost reduction',
        description: 'Strategies in the energy costs reduction for the Lab-Grown Diamonds production facilities.',
      },
      {
        src: '/images/lg3.jpeg',
        type: 'image',
        title: 'Certification',
        description: 'Consulting in the green energy and sustainable production certificates including SCS.',
      },
    ],
    reverse: false,
  };

  return <FeatureSection id="lab-grown" feature={feature} backgroundColor="dark" />;
};

export default LabGrown;

