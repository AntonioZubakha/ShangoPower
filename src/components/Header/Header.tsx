import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './Header.css';
import logo from '../../assets/images/logoNB.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  const toSectionId = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(toSectionId(sectionName));
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

      // Determine active section
      const sections = menuItems
        .map((item) => document.getElementById(toSectionId(item)))
        .filter(Boolean) as HTMLElement[];

      let current = '';
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
          break;
        }
      }

      if (!current && scrollPosition < 100) {
        current = 'about-us';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {menuItems.map((item) => {
              const sectionId = toSectionId(item);
              const isActive = activeSection === sectionId;
              return (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
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

