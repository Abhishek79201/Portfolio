import React from 'react';
import { image02 } from '../../components/Gallaery/Photo';
import Footer from '../Footer/Footer';
import './styles/Projects.scss';
const Pr2 = () => {
  return (
    <>
      <div className="prs">
        <div className="tag">
          <p className="subtitle">{image02.subtitle}</p>
          <p className="category">{image02.category}</p>
        </div>
        <p className="title">{image02.title}</p>
        <img src={image02.src} alt="img" />
        <p className="prtitle">Challenge</p>
        <h1 className="challenge">{image02.challenge}</h1>
      </div>
      <Footer />
    </>
  );
};

export default Pr2;
