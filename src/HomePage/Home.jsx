import React from "react";
import Navbar from "../assets/pages/Navbar/Navbar";
import Hero from "../assets/pages/HeroSection/Hero";
import About from "../assets/pages/About/About";
import Projects from "../assets/pages/Projects/Projects";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <React.Fragment>
        <Element id="home" name="home">
          <Navbar />
          <Hero />
          <About />
          <Projects />
        </Element>
      </React.Fragment>
    </>
  );
};

export default Home;
