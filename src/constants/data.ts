import { Service, PortfolioItem } from '../types';

export const SERVICES: Service[] = [
  { id: 'lab-grown', name: 'Energy For Lab-Grown Diamonds' },
  { id: 'solar', name: 'Solar Energy' },
  { id: 'chp', name: 'Combined Heat and Power' },
  { id: 'rng', name: 'RNG Energy' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    image: '/images/portfolio1.jpeg',
    title: 'Industry: Sugar production',
    description: 'Location: East Europe\nSolution: Renewable natural gas\nWorks: Technical concept, Main technical solutions, Equipment comparison',
  },
  {
    image: '/images/portfolio2.jpeg',
    title: 'Industry: Lab-Grown Diamonds production',
    description: 'Location: East Europe\nSolution: Renewable natural gas\nWorks: Strategies in the energy costs reduction for the Lab-Grown Diamonds production facilities',
  },
  {
    image: '/images/portfolio3.jpeg',
    title: 'Industry: Agriculture',
    description: 'Location: Central Europe\nSolution: Renewable natural gas\nWorks: Technical concept, Main technical solutions, Equipment comparison',
  },
  {
    image: '/images/portfolio4.jpg',
    title: 'Industry: Biogas facility + electricity generation',
    description: 'Location: Eastern Europe\nSolution: Landfill + generation system\nWorks: Feasibility study, Technical concept, Equipment comparison, Tender management',
  },
  {
    image: '/images/portfolio5.jpg',
    title: 'Industry: Industrial zone',
    description: 'Location: Eastern Europe\nSolution: CHP-unit with steam production\nWorks: Feasibility study, Technical concept, Equipment comparison, Tender management',
  },
  {
    image: '/images/portfolio6.jpg',
    title: 'Industry: Household appliance manufacturing',
    description: 'Location: Eastern Europe\nSolution: Green-CHP\nWorks: Feasibility study, CO2 calculation',
  },
  {
    image: '/images/portfolio7.jpg',
    title: 'Industry: Greenhouse',
    description: 'Location: Eastern Europe\nSolution: CHP units with CO2 purification system\nWorks: Greenfield project development, Technical concept, Equipment selection',
  },
  {
    image: '/images/portfolio8.jpeg',
    title: 'Industry: Agriculture',
    description: 'Location: Northern Europe\nSolution: Renewable natural gas\nWorks: Technical concept, Main technical solutions, Equipment selection',
  },
];

