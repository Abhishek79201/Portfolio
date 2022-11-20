import './home.scss';

import React, { useRef } from 'react';
import Hero from '../../components/Hero';
import Projects from '../Projects/Projects';
import About from '../About/About';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// import Feature from '../Feature/Feature';
// import Contact from '../Contact/Contact';

const Home = () => {
  // const containerRef = useRef(null);

  return (
    <div>
      <Hero />
      <About />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
