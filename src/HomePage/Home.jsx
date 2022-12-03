import React from 'react';
import Navbar from '../assets/pages/Navbar/Navbar';
import Hero from '../assets/pages/HeroSection/Hero';
import About from '../assets/pages/About/About';
import Footer from '../assets/pages/Footer/Footer';

import Projects from '../assets/pages/Projects/Projects';
import { Element } from 'react-scroll';
import useLocoScroll from '../assets/hooks/useLocoScroll';

const Home = () => {
  useLocoScroll();

  return (
    <div id="main-container" data-scroll-container>
      <React.Fragment>
        <Element id="home" name="home">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Footer />
        </Element>
      </React.Fragment>
    </div>
  );
};

export default Home;
