import React, { useRef, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ConsultationForm from './components/ConsultationForm';
import Labgrown from './components/Labgrown';
import Solar from './components/Solar';
import CHP from './components/CHP';
import RNG from './components/RNG';

function App() {
  const labGrownFeatureRef = useRef(null);

  useEffect(() => {
    console.log('Rendered App component');
  }, []);

  const scrollToConsultation = () => {
    if (labGrownFeatureRef.current) {
      labGrownFeatureRef.current.scrollToConsultationButton();
      console.log('Scrolling to consultation section');
    } else {
      console.log('labGrownFeatureRef.current is null');
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <section id="aboutus">
          <AboutUs />
        </section>
        <section id="Services">
          <Services scrollToConsultation={scrollToConsultation} />
        </section>
        <section id="labgrowndiamonds">
          <Labgrown ref={labGrownFeatureRef} />
        </section>
        <section id="solar">
          <Solar />
        </section>
        <section id="CHP">
          <CHP />
        </section>
        <section id="RNG">
          <RNG />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="consultation">
          <ConsultationForm />
        </section>
      </main>
      <section id="contacts">
        <Footer />
      </section>
    </div>
  );
}

export default App;