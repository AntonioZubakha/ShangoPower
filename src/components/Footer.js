// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src="images/logoNB.png" alt="Shango Power" className="logo-bot" />
        </div>
        <div className="contacts-content">
          <p className="email">
            <a href="mailto:dk@shango-power.com">dk@shango-power.com</a>
          </p>
        </div>
        <div className="rights">
          <p>© 2024 Shango Power. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
