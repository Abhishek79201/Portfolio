import React, { lazy, Suspense } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
// import Home from './assets/pages/Home/Home';
// import Projects from './assets/pages/Projects/Projects';
// import About from './assets/pages/About/About';
// import Contact from './assets/pages/Contact/Contact';
import Navbar from '../src/assets/components/Navbar';
// import More from './assets/pages/About/More';
import CustomCursor from './assets/CustomCursor';
// import Footer from './assets/pages/Footer/Footer';

const Home = lazy(() => import('./assets/pages/Home/Home'));
const Projects = lazy(() => import('./assets/pages/Projects/Projects'));
const About = lazy(() => import('./assets/pages/About/About'));
const Contact = lazy(() => import('./assets/pages/Contact/Contact'));
const More = lazy(() => import('./assets/pages/About/More'));

function App() {
  return (
    <>
      <CustomCursor />
      <div className="smooth">
        <Navbar />
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
