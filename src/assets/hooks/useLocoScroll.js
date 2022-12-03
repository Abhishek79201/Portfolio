import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';
import 'C:/Users/vaghe/Documents/Portfolio/node_modules/locomotive-scroll/src/locomotive-scroll.scss';
export default function useLocoScroll() {
  useEffect(() => {
    return () => {
      const locoScroll = new LocomotiveScroll();
    };
  }, []);
}
