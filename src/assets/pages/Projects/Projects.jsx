import './project.scss';
import React from 'react';

// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { useIntersection } from 'react-use';
// import gsap from 'gsap';

import SectionHeader from '../../components/SectionHeader/sectionHeader';
import { Link } from 'react-router-dom';

import { PrData } from '../../components/Gallaery/Photo';
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
          {PrData.map((data) => (
            <motion.div
              className="pr"
              exit={{ opacity: 0 }}
              transition={transition}
            >
              <div className="titlediv">
                <p className="title">{data.title}</p>
              </div>
              <div className="hj">
                <Link>
                  <p className="title-num">0{data.id}</p>

                  <img src={data.src} alt="img" />

                  <motion.div
                    className="dwmenu"
                    exit={{ opacity: 0 }}
                    transition={transition}
                  >
                    <p className="subtitle">{data.subtitle}</p>

                    <p className="category">{data.category}</p>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
