import React, { lazy, Suspense } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
// import Home from './assets/pages/Home/Home';
// import Projects from './assets/pages/Projects/Projects';
// import About from './assets/pages/About/About';
// import Contact from './assets/pages/Contact/Contact';
// import More from './assets/pages/About/More';
import CustomCursor from './assets/CustomCursor';
// import Footer from './assets/pages/Footer/Footer';
import Loder from '../src/assets/pages/Loder/Loder';

import Pr1 from './assets/pages/MorePrs/Pr1';

const Home = lazy(() => import('./assets/pages/Home/Home'));
const Projects = lazy(() => import('./assets/pages/Projects/Projects'));
const About = lazy(() => import('./assets/pages/About/About'));
const More = lazy(() => import('./assets/pages/About/More'));
const Contact = lazy(() => import('./assets/pages/Contact/Contact'));

/* <h1>Loding....</h1> */

function App() {
  return (
    <>
      <CustomCursor />

      <Suspense fallback={<Loder />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/Pr1" element={<Pr1 />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
