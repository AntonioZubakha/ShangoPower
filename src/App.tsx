import React, { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './sections/AboutUs/AboutUs';
import { initScrollAnimations } from './utils/scrollAnimations';
import './App.css';

// Lazy load sections for code splitting
const Services = lazy(() => import('./sections/Services/Services'));
const Portfolio = lazy(() => import('./sections/Portfolio/Portfolio'));
const LabGrown = lazy(() => import('./sections/LabGrown/LabGrown'));
const Solar = lazy(() => import('./sections/Solar/Solar'));
const CHP = lazy(() => import('./sections/CHP/CHP'));
const RNG = lazy(() => import('./sections/RNG/RNG'));
const Contact = lazy(() => import('./sections/Contact/Contact'));

// Loading component
const SectionLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div>Loading...</div>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    // Initialize scroll animations after component mounts
    let cleanup: (() => void) | undefined;
    const timer = setTimeout(() => {
      cleanup = initScrollAnimations();
    }, 100);
    return () => {
      clearTimeout(timer);
      cleanup?.();
    };
  }, []);

  return (
    <div className="App">
      <div className="hero-wrapper">
        <Header />
        <AboutUs />
      </div>
      <main>
        <Suspense fallback={<SectionLoader />}>
          <Services />
          <LabGrown />
          <Solar />
          <CHP />
          <RNG />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;

