import React, { lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
 
import { useLocation } from 'react-router-dom';
import Pr1 from '../pages/MorePrs/Pr1';
import Pr2 from '../pages/MorePrs/Pr2';
import Pr3 from '../pages/MorePrs/Pr3';
import Pr4 from '../pages/MorePrs/Pr4';
import Navbar from '../../assets/components/Navbar';
import Footer from '../pages/Footer/Footer';
=======
import { PrData } from './Gallaery/Photo';
import { useLocation } from 'react-router-dom';
import ProjectDetail from '../pages/MorePrs/ProjectDetail';

>>>>>>> 595fa6b4d7fd61861e158e733d8ba601acb6810c
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

          <Route path="/project" element={<Projects />}>
            <Route path=":projectId" element={<ProjectDetail />} />
          </Route>
        </Routes>
        <Footer/>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
