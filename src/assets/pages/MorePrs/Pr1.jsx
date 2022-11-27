import React from 'react';
import { image01 } from '../../components/Gallaery/Photo';
import './styles/Projects.scss';
const Pr1 = () => {
  return (
    <>
      <div className="prs">
        <div className="tag">
          <p className="subtitle">{image01.subtitle}</p>
          <p className="category">{image01.category}</p>
        </div>
        <p className="title">{image01.title}</p>
        <img src={image01.src} alt="img" />
        <p className="prtitle">Challenge</p>
        <h1 className="challenge">{image01.challenge}</h1>
      </div>
    </>
  );
};

export default Pr1;
