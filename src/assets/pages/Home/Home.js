import './home.scss';

import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <div>
      <div className="container">
        <Navbar />
        <Hero />
      </div>
      <Projects />
    </div>
  );
};

export default Home;
