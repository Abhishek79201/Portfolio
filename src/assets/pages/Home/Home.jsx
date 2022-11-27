import "./home.scss";
import "../.././../locoomotive-scroll.css";
import React from "react";
import Hero from "../../components/Hero";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// import Feature from '../Feature/Feature';
// import Contact from '../Contact/Contact';
const Home = () => {
  // const containerRef = useRef(null);
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <Hero />
      <About />
      <Projects />
      <Footer />
    </motion.div>
  );
};

export default Home;
