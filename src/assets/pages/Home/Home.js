import './home.scss';
import '../.././../locoomotive-scroll.css';
import React, { useRef } from 'react';
import Hero from '../../components/Hero';
import Projects from '../Projects/Projects';
import About from '../About/About';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// import Feature from '../Feature/Feature';
// import Contact from '../Contact/Contact';

const Home = () => {
  const containerRef = useRef(null);
  return (
    <div>
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
          <div data-scroll-section>
            <Hero />
            <div data-scroll-speed="2">
              <About />
            </div>
            <Projects />
            {/* <Contact /> */}
          </div>
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
};

export default Home;
