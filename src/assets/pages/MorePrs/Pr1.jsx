import { motion } from 'framer-motion';
import React from 'react';
import { image01 } from '../../components/Gallaery/Photo';
import Footer from '../Footer/Footer';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './styles/Projects.scss';
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const brandTitle = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
const Pr1 = () => {
  return (
    <Wrapper>
      <motion.div initial="initial" animate="animate" exit="exit">
        <motion.div className="prs">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2.2, ...transition },
            }}
            className="tag"
          >
            <p className="subtitle">{image01.subtitle}</p>
            <p className="category">{image01.category}</p>
          </motion.div>
          <div className="titlediv">
            <motion.span className="title" variants={brandTitle}>
              <motion.span variants={letter}>S</motion.span>
              <motion.span variants={letter}>h</motion.span>
              <motion.span variants={letter}>o</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>B</motion.span>
              <motion.span variants={letter}>R</motion.span>
              <motion.span variants={letter}>A</motion.span>
              <motion.span variants={letter}>N</motion.span>
              <motion.span variants={letter}>D</motion.span>
            </motion.span>
          </div>
          <motion.div
            initial={{
              y: '-30%',
            }}
            animate={{
              y: '0%',

              transition: { delay: 0.2, ...transition },
              width: '100%',
            }}
          >
            <motion.img
              src={image01.src}
              initial={{
                width: '100%',
                scale: 0.7,
              }}
              animate={{
                width: '100%',
                scale: 1,
                transition: { delay: 0.2, ...transition },
              }}
              alt="img"
            />
          </motion.div>
          <p className="prtitle">Challenge</p>
          <h1 className="challenge">{image01.challenge}</h1>
        </motion.div>
        <Footer />
      </motion.div>
    </Wrapper>
  );
};

export default Pr1;
