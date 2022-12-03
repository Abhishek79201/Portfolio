import React from 'react';
// import Navbar from '../assets/pages/Navbar/Navbar';
import Hero from '../assets/pages/HeroSection/Hero';
import About from '../assets/pages/About/About';
import Projects from '../assets/pages/Projects/Projects';
import Footer from '../assets/pages/Footer/Footer';

const Home = () => {
  return (
    <div id="main-container" data-scroll-container>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
