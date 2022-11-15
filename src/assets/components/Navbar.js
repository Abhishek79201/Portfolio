import './NavbarStyles.css';
import Logo from '../images/Logo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const funcOfNav = () => {
  //   const ease = {
  //     exponentialIn: (t) => {
  //       return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
  //     },
  //     exponentialOut: (t) => {
  //       return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
  //     },
  //     exponentialInOut: (t) => {
  //       return t == 0.0 || t == 1.0
  //         ? t
  //         : t < 0.5
  //         ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
  //         : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
  //     },
  //     sineOut: (t) => {
  //       const HALF_PI = 1.5707963267948966;
  //       return Math.sin(t * HALF_PI);
  //     },
  //     circularInOut: (t) => {
  //       return t < 0.5
  //         ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
  //         : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
  //     },
  //     cubicIn: (t) => {
  //       return t * t * t;
  //     },
  //     cubicOut: (t) => {
  //       const f = t - 1.0;
  //       return f * f * f + 1.0;
  //     },
  //     cubicInOut: (t) => {
  //       return t < 0.5
  //         ? 4.0 * t * t * t
  //         : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
  //     },
  //     quadraticOut: (t) => {
  //       return -t * (t - 2.0);
  //     },
  //     quarticOut: (t) => {
  //       return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
  //     },
  //   };
  //   {
  //     class ShapeOverlays {
  //       constructor(elm) {
  //         this.elm = elm;
  //         this.path = elm.querySelectorAll('path');
  //         this.numPoints = 4;
  //         this.duration = 1000;
  //         this.delayPointsArray = [];
  //         this.delayPointsMax = 0;
  //         this.delayPerPath = 60;
  //         this.timeStart = Date.now();
  //         this.isOpened = false;
  //         this.isAnimating = false;
  //       }
  //       toggle() {
  //         this.isAnimating = true;
  //         for (var i = 0; i < this.numPoints; i++) {
  //           this.delayPointsArray[i] = 0;
  //         }
  //         if (this.isOpened === false) {
  //           this.open();
  //         } else {
  //           this.close();
  //         }
  //       }
  //       open() {
  //         this.isOpened = true;
  //         this.elm.classList.add('is-opened');
  //         this.timeStart = Date.now();
  //         this.renderLoop();
  //       }
  //       close() {
  //         this.isOpened = false;
  //         this.elm.classList.remove('is-opened');
  //         this.timeStart = Date.now();
  //         this.renderLoop();
  //       }
  //       updatePath(time) {
  //         const points = [];
  //         for (var i = 0; i < this.numPoints; i++) {
  //           const thisEase = i % 2 === 1 ? ease.sineOut : ease.exponentialInOut;
  //           points[i] =
  //             (1 -
  //               thisEase(
  //                 Math.min(
  //                   Math.max(time - this.delayPointsArray[i], 0) /
  //                     this.duration,
  //                   1
  //                 )
  //               )) *
  //             100;
  //         }

  //         let str = '';
  //         str += this.isOpened ? `M 0 0 H ${points[0]}` : `M ${points[0]} 0`;
  //         for (var i = 0; i < this.numPoints - 1; i++) {
  //           const p = ((i + 1) / (this.numPoints - 1)) * 100;
  //           const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
  //           str += `C ${points[i]} ${cp} ${points[i + 1]} ${cp} ${
  //             points[i + 1]
  //           } ${p} `;
  //         }
  //         str += this.isOpened ? `H 100 V 0` : `H 0 V 0`;
  //         return str;
  //       }
  //       render() {
  //         if (this.isOpened) {
  //           for (var i = 0; i < this.path.length; i++) {
  //             this.path[i].setAttribute(
  //               'd',
  //               this.updatePath(
  //                 Date.now() - (this.timeStart + this.delayPerPath * i)
  //               )
  //             );
  //           }
  //         } else {
  //           for (var i = 0; i < this.path.length; i++) {
  //             this.path[i].setAttribute(
  //               'd',
  //               this.updatePath(
  //                 Date.now() -
  //                   (this.timeStart +
  //                     this.delayPerPath * (this.path.length - i - 1))
  //               )
  //             );
  //           }
  //         }
  //       }
  //       renderLoop() {
  //         this.render();
  //         if (
  //           Date.now() - this.timeStart <
  //           this.duration +
  //             this.delayPerPath * (this.path.length - 1) +
  //             this.delayPointsMax
  //         ) {
  //           requestAnimationFrame(() => {
  //             this.renderLoop();
  //           });
  //         } else {
  //           this.isAnimating = false;
  //         }
  //       }
  //     }
  //     (function () {
  //       const elmHamburger = document.querySelector('.hamburger');
  //       const gNavItems = document.querySelectorAll('.global-menu__item');
  //       const elmOverlay = document.querySelector('.shape-overlays');
  //       const overlay = new ShapeOverlays(elmOverlay);

  //       elmHamburger.addEventListener('click', () => {
  //         if (overlay.isAnimating) {
  //           return false;
  //         }
  //         overlay.toggle();
  //         if (overlay.isOpened === true) {
  //           elmHamburger.classList.add('is-opened-navi');
  //           for (var i = 0; i < gNavItems.length; i++) {
  //             gNavItems[i].classList.add('is-opened');
  //           }
  //         } else {
  //           elmHamburger.classList.remove('is-opened-navi');
  //           for (var i = 0; i < gNavItems.length; i++) {
  //             gNavItems[i].classList.remove('is-opened');
  //           }
  //         }
  //       });
  //     })();
  //   }
  // };

  return (
    <div className="header">
      <Link to={'/'}>
        <img src={Logo} alt="React Logo" />
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff0e7' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff0e7' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;

// <div class="content content--demo-4">
//         <div class="hamburger hamburger--demo-4 js-hover">
//           <div class="hamburger__line hamburger__line--01">
//             <div class="hamburger__line-in hamburger__line-in--01 hamburger__line-in--demo-4"></div>
//           </div>
//           <div class="hamburger__line hamburger__line--02">
//             <div class="hamburger__line-in hamburger__line-in--02 hamburger__line-in--demo-4"></div>
//           </div>
//           <div class="hamburger__line hamburger__line--03">
//             <div class="hamburger__line-in hamburger__line-in--03 hamburger__line-in--demo-4"></div>
//           </div>
//           <div class="hamburger__line hamburger__line--cross01">
//             <div class="hamburger__line-in hamburger__line-in--cross01 hamburger__line-in--demo-4"></div>
//           </div>
//           <div class="hamburger__line hamburger__line--cross02">
//             <div class="hamburger__line-in hamburger__line-in--cross02 hamburger__line-in--demo-4"></div>
//           </div>
//         </div>
//       </div>
//       <div class="global-menu nav-wrapper">
//         <nav>
//           <ul class="global-menu__wrap">
//             <li>
//               <Link
//                 id="nav-items"
//                 class="global-menu__item global-menu__item--demo4 "
//                 href="#"
//               >
//                 Research
//               </Link>
//             </li>
//             <li>
//               <Link
//                 id="nav-items"
//                 class="global-menu__item global-menu__item--demo-4 "
//                 href="#"
//               >
//                 Our Story
//               </Link>
//             </li>
//             <li>
//               <Link
//                 id="nav-items"
//                 class="global-menu__item global-menu__item--demo4 "
//                 href="#"
//               >
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link
//                 id="nav-items"
//                 class="global-menu__item global-menu__item--demo-4 "
//                 href="#"
//               >
//                 Contact
//               </Link>{' '}
//             </li>
//           </ul>
//           <div class="cursor"></div>
//         </nav>
//       </div>
//       <svg
//         class="shape-overlays"
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//       >
//         <path class="shape-overlays__path"></path>
//         <path class="shape-overlays__path"></path>
//         <path class="shape-overlays__path"></path>
//       </svg>
//       {funcOfNav()}
