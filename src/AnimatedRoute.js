import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Pr1 from "./assets/pages/MorePrs/Pr1";
import Pr2 from "./assets/pages/MorePrs/Pr2";
import Pr3 from "./assets/pages/MorePrs/Pr3";
import Pr4 from "./assets/pages/MorePrs/Pr4";
// import Footer from "./assets/pages/Footer/Footer";
import Home from "./HomePage/Home";
import Projects from "./assets/pages/Projects/Projects";
import About from "./assets/pages/About/About";
import Contact from "./assets/pages/Contact/Contact";
import More from "./assets/pages/About/About";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/pr1" element={<Pr1 />} />
          <Route path="/project/pr2" element={<Pr2 />} />
          <Route path="/project/pr3" element={<Pr3 />} />
          <Route path="/project/pr4" element={<Pr4 />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
