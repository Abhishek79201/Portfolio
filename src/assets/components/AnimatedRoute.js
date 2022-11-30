import React, { lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import Pr1 from '../pages/MorePrs/Pr1';
import Pr2 from '../pages/MorePrs/Pr2';
import Pr3 from '../pages/MorePrs/Pr3';
import Pr4 from '../pages/MorePrs/Pr4';
import Navbar from '../../assets/components/Navbar';
import Footer from '../pages/Footer/Footer';

const Home = lazy(() => import('../../assets/pages/Home/Home'));
const Projects = lazy(() => import('../../assets/pages/Projects/Projects'));
const About = lazy(() => import('../../assets/pages/About/About'));
const Contact = lazy(() => import('../../assets/pages/Contact/Contact'));
const More = lazy(() => import('../../assets/pages/About/More'));
// import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence
        // initial={false}
        exitBeforeEnter
      >
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/project" element={<Projects />} />
          <Route path="/pr1" element={<Pr1 />} />
          <Route path="/pr2" element={<Pr2 />} />
          <Route path="/pr3" element={<Pr3 />} />
          <Route path="/pr4" element={<Pr4 />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
