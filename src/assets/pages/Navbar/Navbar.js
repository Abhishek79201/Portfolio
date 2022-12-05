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
  // useEffect(() => {
  //   let about = document.querySelector('#About');
  //   let LinkForAbout = document.querySelector('.aboutLink');
  //   LinkForAbout.on('click', function () {
  //     LocoForProject.scrollTo(about);
  //   });
  // }, []);

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
            className="AboutLink"
            activeClassName="active"
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
            className="ProjectLink"
            activeClassName="active"
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
            className="homeLink"
            activeClassName="active"
          >
            Contact
          </a>
        </li>
      </ul>
      <p className="copy-right"> ©2022, Abhishek Vaghela</p>
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
