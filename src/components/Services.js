// src/components/Services.js
import React from 'react';
import './Services.css';

function Services({ scrollToConsultation }) {
  const handleRectangleClick = () => {
    if (scrollToConsultation) {
      scrollToConsultation();
    }
  };

  return (
    <section className="Services">
      <h2>Services</h2>
      <div className="rectangles">
        <div className="rectangle" onClick={handleRectangleClick}>Feasibility studies and calculations</div>
        <div className="rectangle" onClick={handleRectangleClick}>Technical concepts</div>
        <div className="rectangle" onClick={handleRectangleClick}>Equipment selection</div>
        <div className="rectangle" onClick={handleRectangleClick}>Sustainability consulting</div>
      </div>
    </section>
  );
}

export default Services;