import React from 'react';
import './Header.css';

const Header = () => {
  const handleClick = (to) => {
    console.log(`Clicked on ${to}`);
    document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src="images/logoNB.png" alt="SP Engineering Logo" className="logo" />
        </div>
        <nav className="navigation1">
          <ul className="nav-menu">
            <li>
              <button onClick={() => handleClick('aboutus')} className="nav-button">ABOUT US</button>
            </li>
            <li>
              <button onClick={() => handleClick('Services')} className="nav-button">SERVICES</button>
            </li>
            <li>
              <button onClick={() => handleClick('solar')} className="nav-button">SOLAR</button>
            </li>
            <li>
              <button onClick={() => handleClick('CHP')} className="nav-button">CHP</button>
            </li>
            <li>
              <button onClick={() => handleClick('RNG')} className="nav-button">RNG</button>
            </li>
            <li>
              <button onClick={() => handleClick('portfolio')} className="nav-button">PORTFOLIO</button>
            </li>
            <li>
              <button onClick={() => handleClick('contacts')} className="nav-button">CONTACTS</button>
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