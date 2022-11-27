import './project.scss';
import React from 'react';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { useIntersection } from 'react-use';
// import gsap from 'gsap';
import {
  image01,
  image02,
  image03,
  image04,
} from '../../components/Gallaery/Photo';
import SectionHeader from '../../components/SectionHeader/sectionHeader';
import { Link } from 'react-router-dom';

export default function Projects() {
  // console.log(images.length);
  return (
    <>
      <section className="section-wrapper  gallery-wrap">
        <div className="jsd">
          <SectionHeader title="Projects" />
        </div>

        <div className="gallery">
          <div className="pr">
            <div className="hj">
              <Link to="/Pr1">
                <img src={image01.src} alt="img" />
              </Link>
            </div>
            <div className="titlediv">
              <p className="title">{image01.title}</p>
              <p className="subtitle">{image01.subtitle}</p>
              <p className="category">{image01.category}</p>
            </div>
          </div>
          <div className="pr">
            <div className="hj">
              <img src={image02.src} alt="img" />
            </div>
            <div className="titlediv">
              <p className="title">{image02.title}</p>
              <p className="subtitle">{image02.subtitle}</p>
              <p className="category">{image02.category}</p>
            </div>
          </div>
          <div className="pr">
            <div className="hj">
              <img src={image03.src} alt="img" />
            </div>
            <div className="titlediv">
              <p className="title">{image03.title}</p>
              <p className="subtitle">{image03.subtitle}</p>
              <p className="category">{image03.category}</p>
            </div>
          </div>
          <div className="pr">
            <div className="hj">
              <img src={image04.src} alt="img" />
            </div>
            <div className="titlediv">
              <p className="title">{image04.title}</p>
              <p className="subtitle">{image04.subtitle}</p>
              <p className="category">{image04.category}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
