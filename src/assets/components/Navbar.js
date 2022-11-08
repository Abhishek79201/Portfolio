import './NavbarStyles.css';
import Logo from '../images/Logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header">
      <Link to={'/'}>
        <img src={Logo} alt="React Logo" />
      </Link>
    </div>
  );
};

export default Navbar;
