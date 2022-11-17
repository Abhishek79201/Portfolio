import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home/Home';
import Projects from './assets/pages/Projects/Projects';
import About from './assets/pages/About/About';
import Contact from './assets/pages/Contact/Contact';
import Navbar from '../src/assets/components/Navbar';
import React, { useState, useEffect } from 'react';

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scorlled = (winScroll / height) * 100;
    setScrollTop(scorlled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div>
        <div
          id="progressBar"
          style={{ width: `${scrollTop}%`, opacity: `{scrollTop}` }}
        ></div>
        <div id="progressBarContainer"></div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
