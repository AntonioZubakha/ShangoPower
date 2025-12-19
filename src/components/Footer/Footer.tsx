import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logoNB.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Shango Power" className="footer-logo-img" />
          </div>

          <div className="footer-contact">
            <div className="contact-info">
              <p className="email">
                <a href="mailto:dk@shango-power.com">
                  dk@shango-power.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="rights">
            © {currentYear} Shango Power. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

