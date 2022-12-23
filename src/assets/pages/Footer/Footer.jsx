import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
const Footer = () => {
  return (
    <div id="Contact">
      <div className="containerFooter">
        <section className="footers">
          <span className="lerp-wrap " data-scroll="">
            <span data-scroll="" data-scroll-delay="0.18" data-scroll-speed="4">
              C
            </span>
            <span data-scroll="" data-scroll-delay="0.14" data-scroll-speed="4">
              O
            </span>
            <span data-scroll="" data-scroll-delay="0.12" data-scroll-speed="4">
              N
            </span>
            <span data-scroll="" data-scroll-delay="0.1" data-scroll-speed="4">
              T
            </span>
            <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="4">
              E
            </span>
            <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="4">
              C
            </span>
            <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="4">
              T
            </span>
          </span>
          <div className="center">
            <p className="location" id="location-text">
              <span> I'm always </span> <span>interested </span>
              <span>about cool </span> <span>stuff. </span> <span>Are you</span>
              <span> minding a </span> <span>project?</span>
              <span>
                <Link className="hover-underline-animation" to="/contact">
                  Let's talk.
                </Link>
              </span>
            </p>
          </div>
        </section>

        <div className="footer">
          <div className="footer-container">
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
      </div>
    </div>
  );
};

export default Footer;
