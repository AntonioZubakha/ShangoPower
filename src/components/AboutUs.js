import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  console.log('Rendering AboutUs section');
  const video = "images/aboutus.mp4";

  return (
    <section id="aboutus" className="aboutus">
      <div className="aboutus-slide">
        <video src={video} autoPlay loop muted className="aboutus-slide-media" />
        <div className="aboutus-content">
          <h1 className="aboutus-title">About us</h1>
          <p>Shango Power is your consulting partner for renewable energy and sustainability solutions.</p>
          <p>We create added value in energy sustainability of your facility, no matter the task complexity or location.</p>
          <p>Our mission is to help our customers to become more environmentally friendly while reducing energy costs.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;