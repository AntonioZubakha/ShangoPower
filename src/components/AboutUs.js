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
          <p>Shango Power is a consulting agency specializing in renewable energy and energy sustainability.</p>
          <p>Our mission is to help clients become more environmentally friendly while reducing energy costs.</p>
          <p>Our specialists have many years of experience and wide technical expertise in different fields.</p>
          <p>We create added value in energy sustainability for your facility, regardless of task complexity or location.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;