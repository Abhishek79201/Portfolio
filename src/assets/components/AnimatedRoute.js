import React, { lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import Pr1 from '../pages/MorePrs/Pr1';
import Pr2 from '../pages/MorePrs/Pr2';
import Pr3 from '../pages/MorePrs/Pr3';
import Pr4 from '../pages/MorePrs/Pr4';
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
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/project" element={<Projects />} />
          <Route path="/Pr1" element={<Pr1 />} />
          <Route path="/Pr2" element={<Pr2 />} />
          <Route path="/Pr3" element={<Pr3 />} />
          <Route path="/Pr4" element={<Pr4 />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
