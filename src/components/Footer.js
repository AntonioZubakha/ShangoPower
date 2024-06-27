// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src="images/logoNB.png" alt="Shango Power" className="logo" />
        </div>
        <div className="rights">
          <p>© 2024 Shango Power. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;