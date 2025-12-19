import React from 'react';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import { FeatureSection as FeatureSectionType } from '../../types';

const CHP: React.FC = () => {
  const feature: FeatureSectionType = {
    title: 'Combined Heat and Power',
    content: `
      <p>Explore the game-changing efficiency of Combined Heat and Power (CHP) solutions with Shango Power!</p>
      <p>CHP maximizes energy efficiency and reduces costs by generating electricity and using waste heat simultaneously, offering significant savings and environmental benefits.</p>
      <p>At Shango Power, we specialize in optimizing CHP solutions tailored to your business needs, ensuring a sustainable energy future.</p>
    `,
    slides: [
      {
        src: '/images/chp1.mp4',
        type: 'video',
        title: 'Technical Investigation and Concept Design',
        description: 'Maximizing energy efficiency while reducing CAPEX and OPEX.',
      },
      {
        src: '/images/chp2.jpg',
        type: 'image',
        title: 'Equipment Selection and Tender management',
        description: 'Optimizing performance and efficiency.',
      },
      {
        src: '/images/chp3.jpeg',
        type: 'image',
        title: 'Project Development',
        description: 'Project development for Landfill/Wastewater/MSW cogeneration.',
      },
      {
        src: '/images/chp4.jpeg',
        type: 'image',
        title: 'Feasibility study and pay-back calculation',
        description: "Maximizing the project's efficiency and profitability. Thorough assessment and dimensioning.",
      },
    ],
    reverse: false,
  };

  return <FeatureSection id="chp" feature={feature} backgroundColor="dark" />;
};

export default CHP;

