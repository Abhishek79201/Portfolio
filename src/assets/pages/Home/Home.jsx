import './home.scss';
import '../.././../locoomotive-scroll.css';
import React from 'react';
import Hero from '../../components/Hero';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Navbar from '../../components/Navbar';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// import Feature from '../Feature/Feature';
// import Contact from '../Contact/Contact';
const Home = () => {
  // const containerRef = useRef(null);
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
