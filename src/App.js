<<<<<<< HEAD
import React, { lazy, Suspense } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
=======
import React, { Suspense } from "react";
import "./App.scss";
// import { Route, Routes } from "react-router-dom";
// import { useLocation } from "react-router-dom";
>>>>>>> 4b4fdd5d88059cfb8f3658a4919135adbc9555fb
// import Home from './assets/pages/Home/Home';
// import Projects from './assets/pages/Projects/Projects';
// import About from './assets/pages/About/About';
// import Contact from './assets/pages/Contact/Contact';
import Navbar from '../src/assets/components/Navbar';
// import More from './assets/pages/About/More';
import CustomCursor from './assets/CustomCursor';
// import Footer from './assets/pages/Footer/Footer';
import Loder from '../src/assets/pages/Loder/Loder';
import AnimatedRoute from './assets/components/AnimatedRoute';

<<<<<<< HEAD
const Home = lazy(() => import('./assets/pages/Home/Home'));
const Projects = lazy(() => import('./assets/pages/Projects/Projects'));
const About = lazy(() => import('./assets/pages/About/About'));
const Contact = lazy(() => import('./assets/pages/Contact/Contact'));
const More = lazy(() => import('./assets/pages/About/More'));
=======
// const Home = lazy(() => import("./assets/pages/Home/Home"));
// const Projects = lazy(() => import("./assets/pages/Projects/Projects"));
// const About = lazy(() => import("./assets/pages/About/About"));
// const Contact = lazy(() => import("./assets/pages/Contact/Contact"));
// const More = lazy(() => import("./assets/pages/About/More"));
>>>>>>> 4b4fdd5d88059cfb8f3658a4919135adbc9555fb

/* <h1>Loding....</h1> */

function App() {
  return (
    <>
      <CustomCursor />

      <Suspense fallback={<Loder />}>
        <AnimatedRoute />
      </Suspense>
    </>
  );
}

export default App;
