import './NavbarStyles.css';
import Logo from '../images/Logo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header ">
      <Link to={'/'}>
        <img src={Logo} alt="React Logo" className="logo" />
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Project" activeClassName="active">
            Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
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
