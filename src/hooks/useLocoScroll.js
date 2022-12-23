import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
// import { Scroll } from 'react-locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
    let locoScroll = null;

    const scrollEl = document.querySelector('#main-container');

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
      mobile: {
        breakpoint: 0, // <---- Fixes The Issue
        smooth: true,
        multiplier: 4.5,
        lerp: 1,
      },
      tablet: {
        breakpoint: 0, // <---- Fixes The Issue
        smooth: true,
        inertia: 0.8,
        lerp: 1,
        multiplier: 4.5,
      },
    });

    locoScroll.on('scroll', () => {
      ScrollTrigger.update();
    });
    //
    ///

    ///
    ///
    ///
    //
    const bar = document.querySelector('.after');
    const header = document.querySelector('.header');
    locoScroll.on('scroll', ({ limit, scroll }) => {
      let progress = (scroll.y / limit.y) * 100;
      console.log(progress);
      bar.style.width = `${progress}%`;
      header.style.backdropFilter = `blur(${progress / 7}px)`;
    });

    new ResizeObserver(() => locoScroll.update()).observe(
      document.querySelector('[data-scroll-container]')
    );

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x;
        }
        return null;
      },
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener('refresh', lsUpdate);

        locoScroll.destroy();
        locoScroll = null;
        console.log('Kill', locoScroll);
      }
    };
  }, [start]);
}
