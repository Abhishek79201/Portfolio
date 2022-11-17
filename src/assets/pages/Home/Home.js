import './home.scss';

import React from 'react';
import Hero from '../../components/Hero';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
