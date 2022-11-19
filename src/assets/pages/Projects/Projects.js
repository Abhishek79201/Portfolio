import './project.scss';
import React from 'react';
import { useState, useEffect } from 'react';
// import { useIntersection } from 'react-use';
// import gsap from 'gsap';
const Projects = () => {
  //
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scorlled = (winScroll / height) * 100;
    setScrollTop(scorlled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // const images = [
  //   {
  //     src: './../../images/01.png',
  //     title: 'ShoeBrand',
  //     subtitle: 'Run Like fury',
  //     category: 'footware  / Adv.Campaing',
  //   },
  //   {
  //     src: './../../images/02.png',
  //     title: 'Amazon',
  //     subtitle: 'I like it This Way!',
  //     category: 'WebRedesign  / Adv.Campaing',
  //   },
  //   {
  //     src: './../../images/03.png',
  //     title: 'Shozem',
  //     subtitle: 'Every step matters',
  //     category: 'WebRedesign  / Adv.Campaing',
  //   },
  //   {
  //     src: './../../images/04.png',
  //     title: 'M-seal',
  //     subtitle: 'Chemical Seals',
  //     category: 'Industrial Seal  / Adv.Campaing',
  //   },
  // ];
  return (
    <section className="project containerO">
      <div className="container b2">
        <h1
          className="title "
          style={{
            left: `${scrollTop / 3.5}%`,
            opacity: `${scrollTop * 4}%`,
          }}
        >
          Projects
        </h1>
      </div>
      <div className="section-wrapper gallery-wrap"></div>
    </section>
  );
};

export default Projects;
