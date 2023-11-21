import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import Bar from '../img/2292434-200.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="Navbar__Wrapper">
            <div className="Navbar__logo">
              <h1>B</h1>
            </div>
            <div className={`Navbar__menu__ul ${isMenuOpen ? 'open' : 'closed'}`}>
              <ul className={`Navbar__menu${isMenuOpen ? 'open' : 'closed'}`}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
             
            </div>
            <button onClick={toggleMenu}>
                <img src={Bar} alt="" className="Bar__img" />
              </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
