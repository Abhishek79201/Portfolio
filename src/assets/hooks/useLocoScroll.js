import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';
import 'C:/Users/vaghe/Documents/Portfolio/node_modules/locomotive-scroll/src/locomotive-scroll.scss';
export default function useLocoScroll() {
  useEffect(() => {
    return () => {
      const scrollEl = document.querySelector('#main-container');
      const locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
      });
    };
  }, []);
}
