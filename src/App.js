import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home/Home";
import Projects from "./assets/pages/Projects/Projects";
import About from "./assets/pages/About/About";
import Contact from "./assets/pages/Contact/Contact";
import Navbar from "../src/assets/components/Navbar";
// import { Helmet } from 'react-helmet';

function App() {
  const progressBar = document.querySelector("#progressBar");
  let totalPageHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = () => {
    let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
    progressBar.style.height = `${newProgressHeight}%`;
    progressBar.style.opacity = `${newProgressHeight}%`;
  };

  return (
    <>
      <div>
        <div id="progressBar"></div>
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
