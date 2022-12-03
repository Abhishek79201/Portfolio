import React, { Suspense, useEffect, useRef } from 'react';
import './App.scss';
import gsap from 'gsap';
import CustomCursor from './assets/CustomCursor';
import Loder from '../src/assets/pages/Loder/Loder';
import AnimatedRoute from './assets/components/AnimatedRoute';

/* <h1>Loding....</h1> */

function App() {
  const load = gsap.timeline({
    paused: 'true',
  });
  let loader = useRef(null);
  let progress = useRef(null);
  let percent = useRef(null);
  let bar = useRef(null);
  let barc = useRef(null);

  useEffect(() => {
    load.to([percent, bar, barc], {
      duration: 0.2,
      opacity: 0,
      zIndex: -1,
    });
    load.to(progress, {
      duration: 0.8,
      width: '0%',
      opacity: 1,
    });
    load.to(loader, {
      zIndex: -1,
      display: 'none',
      transform: 'translateY(-200vh)',
      transition: '1s all ease',
    });
  });

  var id;
  var width1 = 1;

  function loading() {
    id = setInterval(frame, 20);
  }
  function frame() {
    if (width1 >= 100) {
      clearInterval(id);
      load.play();
    } else {
      width1++;
      document.getElementById('barc').style.width = width1 + '%';
      document.getElementById('percent').innerHTML = width1 + '%';
    }
  }
  window.addEventListener('load', (e) => {
    loading();
  });
  return (
    <>
      <CustomCursor />
      <div class="loader" ref={(el) => (loader = el)}>
        <div class="progress" ref={(el) => (progress = el)}>
          <div id="percent" ref={(el) => (percent = el)}>
            1%
          </div>
          <div id="bar" ref={(el) => (bar = el)}>
            <div id="barc" ref={(el) => (barc = el)}></div>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loder />}>
        <AnimatedRoute />
      </Suspense>
    </>
  );
}

export default App;
