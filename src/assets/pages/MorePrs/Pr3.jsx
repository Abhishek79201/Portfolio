import React from 'react';
import { image03 } from '../../components/Gallaery/Photo';
import Footer from '../Footer/Footer';
import './styles/Projects.scss';
const Pr3 = () => {
  return (
    <>
      <div className="prs">
        <div className="tag">
          <p className="subtitle">{image03.subtitle}</p>
          <p className="category">{image03.category}</p>
        </div>
        <p className="title">{image03.title}</p>
        <img src={image03.src} alt="img" />
        <p className="prtitle">Challenge</p>
        <h1 className="challenge">{image03.challenge}</h1>
      </div>
      <Footer />
    </>
  );
};

export default Pr3;
