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
      multiplier: 0.85,
      class: 'is-reveal',
    });

    locoScroll.on('scroll', () => {
      ScrollTrigger.update();
    });
    //
    ///

    // ScrollTrigger.scrollerProxy('#main-container', {
    //   scrollTop(value) {
    //     return arguments.length
    //       ? locoScroll.scrollTo(value, 0, 0)
    //       : locoScroll.scroll.instance.scroll.y;
    //   },
    //   getBoundingClientRect() {
    //     return {
    //       top: 0,
    //       left: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //     };
    //   },

    //   pinType: document.querySelector('#main-container').style.transform
    //     ? 'transform'
    //     : 'fixed',
    // });
    ///
    ///
    //

    gsap.set('.hide', { yPercent: 100 });
    let tl = gsap
      .timeline({ defaults: { ease: 'power1', repeat: 0 } })
      .to('.hide', { yPercent: 0, duration: 0.9 }, 0);
    ScrollTrigger.create({
      trigger: '.projecctTitle',
      scroller: '#main-container',
      start: '30% 50%',
      end: '+=300',
      scrub: 3,
      animation: tl,
    });

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
