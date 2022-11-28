import React, { lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Home = lazy(() => import("../../assets/pages/Home/Home"));
const Projects = lazy(() => import("../../assets/pages/Projects/Projects"));
const About = lazy(() => import("../../assets/pages/About/About"));
const Contact = lazy(() => import("../../assets/pages/Contact/Contact"));
const More = lazy(() => import("../../assets/pages/About/More"));
// import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/more" element={<More />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
