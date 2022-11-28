<<<<<<< HEAD
import './home.scss';
import '../.././../locoomotive-scroll.css';
import React from 'react';
import Hero from '../../components/Hero';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Navbar from '../../components/Navbar';
=======
import "./home.scss";
import "../.././../locoomotive-scroll.css";
import React from "react";
import Hero from "../../components/Hero";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
>>>>>>> be5c76fb5582e7eee48b2e8f8c6f3147a0413ae0

// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// import Feature from '../Feature/Feature';
// import Contact from '../Contact/Contact';
const Home = () => {
  // const containerRef = useRef(null);
  return (
<<<<<<< HEAD
    <div>
      <Navbar />
=======
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
>>>>>>> be5c76fb5582e7eee48b2e8f8c6f3147a0413ae0
      <Hero />
      <About />
      <Projects />
      <Footer />
    </motion.div>
  );
};

export default Home;
