import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
    let locoScroll = null;

    const scrollEl = document.querySelector('#main-container');

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 0.75,
      class: 'is-reveal',
    });

    locoScroll.on('scroll', () => {
      ScrollTrigger.update();
    });
    //
    //
    //
    ///
    ///
    ///

    ///
    ///
    ///
    ///
    ///
    ///
    ///
    const bar = document.querySelector('.after');

    locoScroll.on('scroll', ({ limit, scroll }) => {
      let progress = (scroll.y / limit.y) * 97;
      console.log(progress);
      bar.style.width = `${progress}%`;
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
