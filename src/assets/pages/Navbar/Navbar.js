import './NavbarStyles.css';
import Logo from './../../components/images/Logo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
// import LocoForProject from './../../../hooks/LocoForProject';
// import { Link } from 'react-scroll';
// import { useEffect } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header " id="header" data-scroll-section>
      <Link to="/">
        <img src={Logo} alt="React Logo" className="logos" />
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <a
            href="#AboutSection"
            spy={true}
            smooth={true}
            data-scroll-to
            className="nav-Link"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Project"
            spy={true}
            smooth={true}
            data-scroll-to
            className="nav-Link"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            spy={true}
            data-scroll-to
            smooth={true}
            className="nav-Link"
          >
            Contact
          </a>
        </li>
      </ul>
      <p className="copy-right"> ©2022, Abhishek Vaghela</p>
      <div className="after"></div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} className="logo" style={{ color: '#fff0e7' }} />
        ) : (
          <FaBars size={25} className="logo" style={{ color: '#fff0e7' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
