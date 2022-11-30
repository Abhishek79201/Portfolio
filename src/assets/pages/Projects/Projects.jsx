import './project.scss';
import React from 'react';

// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { useIntersection } from 'react-use';
// import gsap from 'gsap';

import SectionHeader from '../../components/SectionHeader/sectionHeader';
import { Link } from 'react-router-dom';

import {
  image01,
  image02,
  image03,
  image04,
} from '../../components/Gallaery/Photo';
import { motion } from 'framer-motion';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Projects() {
  // console.log(images.length);
  
  return (
    <>
      <section className="section-wrapper  gallery-wrap">
        <div className="jsd">
          <SectionHeader title="Projects" />
        </div>

        <motion.div className="gallery">
          <motion.div
            className="pr"
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <div className="titlediv">
              <p className="title">{image01.title}</p>
            </div>
            <div className="hj">
              <Link to="/Pr1">
                <p className="title-num">01</p>
                <img src={image01.src} alt="img" />
                <motion.div
                  className="dwmenu"
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <p className="subtitle">{image01.subtitle}</p>
                  <p className="category">{image01.category}</p>
                </motion.div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="pr"
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <div className="titlediv">
              <p className="title">{image02.title}</p>
            </div>
            <div className="hj">
              <Link to="/Pr2">
                <p className="title-num">02</p>
                <img src={image02.src} alt="img" />
                <motion.div
                  className="dwmenu"
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <p className="subtitle">{image02.subtitle}</p>
                  <p className="category">{image02.category}</p>
                </motion.div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="pr"
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <div className="titlediv">
              <p className="title">{image03.title}</p>
            </div>
            <div className="hj">
              <Link to="/Pr3">
                <p className="title-num">03</p>
                <img src={image03.src} alt="img" />
                <motion.div
                  className="dwmenu"
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <p className="subtitle">{image03.subtitle}</p>
                  <p className="category">{image03.category}</p>
                </motion.div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="pr"
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <div className="titlediv">
              <p className="title">{image04.title}</p>
            </div>
            <div className="hj">
              <Link to="/Pr4">
                <p className="title-num">04</p>
                <img src={image04.src} alt="img" />{' '}
                <motion.div
                  exit={{ opacity: 0 }}
                  transition={transition}
                  className="dwmenu"
                >
                  <p className="subtitle">{image04.subtitle}</p>
                  <p className="category">{image04.category}</p>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
