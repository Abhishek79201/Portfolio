import "./NavbarStyles.css";
import Logo from "./../../components/images/Logo.svg";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header ">
      <Link to={"/"}>
        <img src={Logo} alt="React Logo" className="logo" />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="home" spy={true} smooth={true} activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="Project" spy={true} smooth={true} activeClassName="active">
            Project
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} className="logo" style={{ color: "#fff0e7" }} />
        ) : (
          <FaBars size={25} className="logo" style={{ color: "#fff0e7" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
