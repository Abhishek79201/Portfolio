import './project.scss';
import React from 'react';
import { Element } from 'react-scroll';
import { SectionHeader } from '../../components/SectionHeader/sectionHeader';
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

function Whereto(data) {
  if (data.id === 1) {
    return '/project/pr1';
  }
  if (data.id === 2) {
    return '/project/pr2';
  }
  if (data.id === 3) {
    return '/project/pr3';
  }
  if (data.id === 4) {
    return '/project/pr4';
  }
}

export default function Projects() {
  // console.log(images.length);
  return (
    <div data-scroll-section>
      <section>
        <React.Fragment>
          <Element id="Project" name="Project">
            <Wrapper id="Project">
              <section className="section-wrapper  gallery-wrap">
                <div className="projectcontent">
                  <div className="projectTitle">
                    <SectionHeader title="Projects" />
                  </div>
                  <motion.div className="gallery">
                    {PrData.map((data) => (
                      <motion.div
                        className="pr"
                        exit={{ opacity: 0 }}
                        transition={transition}
                      >
                        <p className="title-num">0{data.id}</p>
                        <div className="titlediv">
                          <div className="title-section">
                            <p className="title">{data.title}</p>
                            <div className="line"></div>
                            <motion.div
                              className="dwmenu"
                              exit={{ opacity: 0 }}
                              transition={transition}
                            >
                              <p className="subtitle">{data.subtitle}</p>

                              <p className="category">{data.category}</p>
                              <div className="line"></div>

                              <p className="See">See more</p>
                            </motion.div>
                          </div>
                        </div>
                        <div className="hj">
                          <Link to={Whereto(data)}>
                            <img
                              src={data.src}
                              alt="img"
                              width="100%"
                              height="100%"
                            />{' '}
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>
            </Wrapper>
          </Element>
        </React.Fragment>
      </section>
    </div>
  );
}
