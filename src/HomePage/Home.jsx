import React from 'react';
import Navbar from '../assets/pages/Navbar/Navbar';
import Hero from '../assets/pages/HeroSection/Hero';
import About from '../assets/pages/About/About';
import Footer from '../assets/pages/Footer/Footer';

import Projects from '../assets/pages/Projects/Projects';
import { Element } from 'react-scroll';
// import useLocoScroll from '../assets/hooks/useLocoScroll';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';

const Home = () => {
  // useLocoScroll();

  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <div id="main-container">
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
      </main>
    </LocomotiveScrollProvider>
  );
};

export default Home;
