import './project.scss';
import React from 'react';

import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { PrData } from './../../components/ProjectData/ProjectData';
import { motion } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Projects() {
  // console.log(images.length);
  return (
    <Element name="Project">
      <Wrapper>
        <div
          id="Project"
          className="projectcontent section-wrapper"
          data-scroll-section
        >
          <span className="lerp-wrap prjTitle" data-scroll="">
            <span data-scroll="" data-scroll-delay="0.18" data-scroll-speed="4">
              P
            </span>
            <span data-scroll="" data-scroll-delay="0.14" data-scroll-speed="4">
              R
            </span>
            <span data-scroll="" data-scroll-delay="0.12" data-scroll-speed="4">
              O
            </span>
            <span data-scroll="" data-scroll-delay="0.1" data-scroll-speed="4">
              J
            </span>
            <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="4">
              E
            </span>
            <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="4">
              C
            </span>
            <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="4">
              T
            </span>
            <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="4">
              S
            </span>
          </span>

          <motion.div className="gallery">
            {PrData.map((data) => (
              <motion.div
                className="pr "
                id={data.containerClass}
                exit={{ opacity: 0 }}
                transition={transition}
              >
                <div className="titlediv">
                  <div className="title-section">
                    <div
                      data-scroll
                      data-scroll-speed="2"
                      data-scroll-class="appear"
                    >
                      <p className="title hide">{data.title}</p>
                    </div>
                    <div
                      data-scroll
                      data-scroll-speed="3"
                      data-scroll-class="appear"
                      className="line"
                    ></div>
                    <motion.div
                      className="dwmenu"
                      exit={{ opacity: 0 }}
                      transition={transition}
                      data-scroll
                      data-scroll-speed="3"
                      data-scroll-class="appear"
                    >
                      <p className="subtitle">{data.subtitle}</p>

                      <p className="category">{data.category}</p>
                      <div className="line"></div>

                      <Link
                        className="See hover-underline-animation
                        "
                        to={data.subpageUrl}
                      >
                        See more
                      </Link>
                    </motion.div>
                  </div>
                </div>
                <div
                  data-scroll
                  data-scroll-speed="-2"
                  // data-scroll-direction="horizontal"
                >
                  <p className="title-num">0{data.id}</p>
                </div>
                <div className="hj">
                  <Link to={data.subpageUrl}>
                    <img
                      data-scroll
                      data-scroll-class="img"
                      data-scroll-repeat="true"
                      src={data.src}
                      alt="img"
                      width="100%"
                      height="100%"
                      id={data.imgclass}
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Wrapper>
    </Element>
  );
}
