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
const transition = { duration: 2.4, ease: [0.6, 0.01, -0.05, 0.9] };
const Pr1 = () => {
  return (
    <Wrapper>
      <motion.div initial="initial" animate="animate" exit="exit">
        <div className="prs">
          <motion.div initial={{ opacity: 0 }} className="tag">
            <p className="subtitle">{image01.subtitle}</p>
            <p className="category">{image01.category}</p>
          </motion.div>
          <motion.p className="title" initial={{ opacity: 0 }}>
            {image01.title}
          </motion.p>
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
        </div>
        <Footer />
      </motion.div>
    </Wrapper>
  );
};

export default Pr1;
