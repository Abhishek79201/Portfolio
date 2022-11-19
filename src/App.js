import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home/Home';
import Projects from './assets/pages/Projects/Projects';
import About from './assets/pages/About/About';
import Contact from './assets/pages/Contact/Contact';
import Navbar from '../src/assets/components/Navbar';
import Scbar from './assets/scbar';
import CustomCursor from './assets/CustomCursor';
function App() {
  return (
    <>
      <CustomCursor />
      <div className="smooth">
        <Scbar />
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
