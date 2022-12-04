import React from 'react';
import Navbar from '../assets/pages/Navbar/Navbar';
import Hero from '../assets/pages/HeroSection/Hero';
import About from '../assets/pages/About/About';
import Footer from '../assets/pages/Footer/Footer';
import Logo from './../assets/components/images/Logo.svg';
import Projects from '../assets/pages/Projects/Projects';
// import { Element } from 'react-scroll';
import './home.scss';
import useLocoScroll from './../hooks/useLocoScroll';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // useLocoScroll();

  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === 'undefined' || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(0.5);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1500);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === 'undefined' || !window.document) {
    return null;
  }
  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <Link to={'/'}>
            <img src={Logo} alt="React Logo" className="logo" height={200} />
          </Link>
          <h2>Abhishek Vaghela</h2>
          {/* <video src={video} /> */}
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <div data-scroll-section>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
