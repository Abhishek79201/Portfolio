import './project.scss';
import React from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useState, useEffect } from 'react';
// import { useIntersection } from 'react-use';
// import gsap from 'gsap';
import img01 from './../../images/01.png';
import img02 from './../../images/02.png';
import img03 from './../../images/03.png';
import img04 from './../../images/04.png';
import SectionHeader from '../../components/SectionHeader/sectionHeader';

const images = [
  {
    src: `${img01}`,
    title: 'ShoeBrand',
    subtitle: 'Run Like fury',
    category: 'footware  / Adv.Campaing',
  },
  {
    src: `${img02}`,

    title: 'Amazon',
    subtitle: 'I like it This Way!',
    category: 'WebRedesign  / Adv.Campaing',
  },
  {
    src: `${img03}`,

    title: 'Shozem',
    subtitle: 'Every step matters',
    category: 'WebRedesign  / Adv.Campaing',
  },
  {
    src: `${img04}`,

    title: 'M-seal',
    subtitle: 'Chemical Seals',
    category: 'Industrial Seal  / Adv.Campaing',
  },
];

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  return (
    <div className="gallery-item-wrapper">
      <div />
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h1 className="gallery-info-subtitle">{subtitle}</h1>
          <h1 className="gallery-info-category">{category}</h1>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div />
    </div>
  );
}
export default function Projects() {
  const [activeImage, setActiveImage] = useState(1);
  console.log(images.length);
  return (
    <>
      <section className="section-wrapper  gallery-wrap">
        <div className="jsd">
          <SectionHeader title="Projects" />
        </div>

        <div className="gallery">
          <div className="gallery-counter">
            <span>{activeImage}</span>
            <span className="divider" />
            <span>{images.length}</span>
          </div>
          {images.map((image, index) => (
            <GalleryItem
              key={image.src}
              index={index}
              {...image}
              updateActiveImage={(index) => setActiveImage(index + 1)}
            />
          ))}
        </div>
      </section>
      {/* <section className="project containerO">
        <div className="container">
          <h1 className="title ">Projects</h1>
        </div>
     
      </section> */}
    </>
  );
}
