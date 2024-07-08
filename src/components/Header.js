
import React from 'react';
import './Header.css';

const Header = () => {
  const handleClick = (to) => {
    document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-top-container">
          <img src="images/logoNB.png" alt="SP Engineering Logo" className="logo-top" />
        </div>
        <nav className="navigation1">
          <ul className="nav-menu">
            <li>
              <button onClick={() => handleClick('aboutus')} className="nav-button">About us</button>
            </li>
            <li>
              <button onClick={() => handleClick('Services')} className="nav-button">Services</button>
            </li>
            <li>
              <button onClick={() => handleClick('solar')} className="nav-button">Solar</button>
            </li>
            <li>
              <button onClick={() => handleClick('CHP')} className="nav-button">CHP</button>
            </li>
            <li>
              <button onClick={() => handleClick('RNG')} className="nav-button">RNG</button>
            </li>
            <li>
              <button onClick={() => handleClick('portfolio')} className="nav-button">Portfolio</button>
            </li>
            <li>
              <button onClick={() => handleClick('contacts')} className="nav-button">Contacts</button>
            </li>
          </ul>
        </nav>
        <div className="header-download-btn">
          <button onClick={() => handleClick('consultation')} className="download-button">Request a consultation</button>
        </div>
      </div>
    </header>
  );
};

export default Header;