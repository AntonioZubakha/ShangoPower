import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './Header.css';
import logo from '../../assets/images/logoNB.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    'About Us',
    'Services',
    'Lab Grown',
    'Solar',
    'CHP',
    'RNG',
    'Portfolio',
    'Contact',
  ];

  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(
      sectionName.toLowerCase().replace(' ', '-')
    );
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownload = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogoClick = () => {
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container" onClick={handleLogoClick}>
          <img src={logo} alt="Shango Power" className="logo" />
        </div>

        <nav className={`navigation ${isMobileMenuOpen ? 'open' : ''}`}>
          <button
            className="navigation-close"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span></span>
            <span></span>
          </button>
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="nav-link"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Button onClick={handleDownload} size="small" className="download-btn btn-on-dark">
          Request consultation
          </Button>
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

