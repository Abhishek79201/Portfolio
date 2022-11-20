import './about.scss';
import 'animate.css/animate.min.css';
import gsap from 'gsap';
import React from 'react';

const More = () => {
  gsap.to('.title', { duration: 5, ease: 'power2.out', y: -5 });
  // const [scrollTop, setScrollTop] = useState(0);
  // const onScroll = () => {
  //   const winScroll = document.documentElement.scrollTop;
  //   let height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   const scorlled = (winScroll / height) * 100;
  //   setScrollTop(scorlled);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);

  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return <></>;
};

export default More;
