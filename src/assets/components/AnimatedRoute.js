import React, { lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { PrData } from './Gallaery/Photo';
import { useLocation } from 'react-router-dom';
import ProjectDetail from '../pages/MorePrs/ProjectDetail';

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

          <Route path="/project" element={<Projects />}>
            <Route path=":projectId" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
