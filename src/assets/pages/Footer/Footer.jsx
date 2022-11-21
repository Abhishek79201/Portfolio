import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
const Footer = () => {
  return (
    <div className="containerFooter page-content">
      <section className="footers">
        <div className="center">
          <h1 className="location" id="location-text">
            <span> I'm always </span> <span>interested </span>
            <span>about cool </span> <span>stuff. </span> <span>Are you</span>
            <span> minding a </span> <span>project?</span>
            <span>Let's talk.</span>
          </h1>
        </div>
      </section>
      <div className="footer">
        <div className="footer-container">
          <div className="message-for-users">
            <span>Contact me at Your pleasure</span>
          </div>
          <div className="social-links">
            <div className="social-links-h">Social</div>
            <div className="social-links-items">
              <Link href="">Instagram</Link>
              <Link href="">Twitter</Link>
              <Link href="">Github</Link>
              <Link href="">LinkedIn</Link>
            </div>
          </div>
          <div className="social-links">
            <div className="social-links-h">Contact</div>
            <div className="social-links-items">
              <Link href="">Mail</Link>
              <Link href="">Whatsapp</Link>
              <Link href="">Telegram</Link>
              <Link href="">+91 8200-394-360</Link>
            </div>
          </div>
          <div className="footer-menu social-links">
            <div className="footer-menu-h social-links-h">Other Menu</div>
            <div className="footer-menu-links social-links-items">
              <p className="footer-menu-links-items">Home.</p>
              <p className="footer-menu-links-items">About.</p>
              <p className="footer-menu-links-items">Projects.</p>
              <p className="footer-menu-links-items">Contact.</p>
            </div>
          </div>
          <div className="footer-btn">
            <Link href="" className="footer-btn-a">
              Get Started!
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="left-footer-bottom">
            <p>India</p>
          </div>
          <div className="right-footer-bottom">
            <p>2022. Abhishek Vaghela. ALL RIGHT RESERVED</p>
          </div>
        </div>
      </div>
      <div className="footer-ticker">
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
        <div className="footer-ticker-item">&nbsp; - Abhishek Vaghela </div>
      </div>
    </div>
  );
};

export default Footer;
