import './home.scss';

import React from 'react';
import Hero from '../../components/Hero';
import Projects from '../Projects/Projects';
import About from '../About/About';
// import Feature from '../Feature/Feature';
// import Contact from '../Contact/Contact';

const Home = () => {
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
