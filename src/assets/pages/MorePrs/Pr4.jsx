import React from 'react';
import { image04 } from '../../components/Gallaery/Photo';
import Footer from '../Footer/Footer';
import './styles/Projects.scss';
const Pr4 = () => {
  return (
    <>
      <div className="prs">
        <div className="tag">
          <p className="subtitle">{image04.subtitle}</p>
          <p className="category">{image04.category}</p>
        </div>
        <p className="title">{image04.title}</p>
        <img src={image04.src} alt="img" />
        <p className="prtitle">Challenge</p>
        <h1 className="challenge">{image04.challenge}</h1>
      </div>
      <Footer />
    </>
  );
};

export default Pr4;
