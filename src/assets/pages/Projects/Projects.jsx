import "./project.scss";
import React from "react";
import { motion } from "framer-motion";
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { useIntersection } from 'react-use';
// import gsap from 'gsap';
<<<<<<< HEAD
import {
  image01,
  image02,
  image03,
  image04,
} from '../../components/Gallaery/Photo';
import SectionHeader from '../../components/SectionHeader/sectionHeader';
import { Link } from 'react-router-dom';

=======
import img01 from "./../../images/01.png";
import img02 from "./../../images/02.png";
import img03 from "./../../images/03.png";
import img04 from "./../../images/04.png";
import SectionHeader from "../../components/SectionHeader/sectionHeader";
import { Link } from "react-router-dom";

const image01 = {
  src: `${img01}`,
  title: "ShoeBrand",
  subtitle: "Run Like fury",
  category: "footware  / Adv.Campaing",
};
const image02 = {
  src: `${img02}`,

  title: "Amazon",
  subtitle: "I like it This Way!",
  category: "WebRedesign  / Adv.Campaing",
};
const image03 = {
  src: `${img03}`,

  title: "Shozem",
  subtitle: "Every step matters",
  category: "WebRedesign  / Adv.Campaing",
};
const image04 = {
  src: `${img04}`,
  title: "M-seal",
  subtitle: "Chemical Seals",
  category: "Industrial Seal  / Adv.Campaing",
};

>>>>>>> be5c76fb5582e7eee48b2e8f8c6f3147a0413ae0
export default function Projects() {
  // console.log(images.length);
  return (
    <>
      <motion.section
        className="section-wrapper  gallery-wrap"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
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
      </motion.section>
    </>
  );
}
