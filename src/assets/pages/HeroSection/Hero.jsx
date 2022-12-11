import React from 'react';

import './Hero.css';
import { LoopHolder } from '../../components/SectionHeader/sectionHeader.jsx';
const Hero = () => {
  return (
    <div className="content" data-scroll-section>
      <div className="content">
        <div className="big-text">
          <div className="wrapper">
            <svg
              className="herobg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 552 240"
            >
              <g stroke="#5a2add" stroke-opacity=".4" clip-path="url(#a)">
                <path d="M0 1.7041c39.4053 0 71.3372 52.4169 71.3372 117.1029S39.4053 235.91 0 235.91" />
                <path d="M276.64 154.126c-28.127 9.202-63.851 14.849-101.015 14.849-95.1158 0-172.2959-35.513-172.2959-79.3414 0-43.8285 77.1801-79.3411 172.2959-79.3411 41.716 0 71.19 3.7167 101.015 15.0998" />
                <path d="M276.64 212.588c-29.826 11.451-58.961 14.663-100.812 14.663-95.1167 0-172.29675-35.581-172.29675-79.341 0-43.761 77.18005-79.4095 172.29675-79.4095 37.163 0 72.56 5.2485 100.687 14.4504" />
                <path d="M551.674 235.91c-39.405 0-71.337-52.417-71.337-117.103 0-64.686 31.932-117.1029 71.337-117.1029" />
                <path d="M276.312 83.2946c28.128-9.202 62.573-14.655 99.737-14.655 95.116 0 172.296 35.5124 172.296 79.3414 0 43.828-77.112 79.341-172.296 79.341-41.716 0-69.583-3.351-99.409-14.734" />
                <path d="M276.641 25.3924c29.825-11.4512 57.489-15.3045 99.34-15.3045 95.116 0 172.296 35.5126 172.296 79.3411 0 43.828-77.112 79.341-172.296 79.341-37.163 0-71.213-5.442-99.34-14.644" />
                <path d="M279.234 236.796c86.902 0 157.35-52.825 157.35-117.989 0-65.1636-70.448-117.989129-157.35-117.989129-86.901 0-157.349 52.825529-157.349 117.989129 0 65.164 70.448 117.989 157.349 117.989Z" />
                <path d="M276.652.817871V236.796" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h551.674v240H0z" />
                </clipPath>
              </defs>
            </svg>
            <p className="titleH">Let's</p>

            <div className="words">
              <span className="c1 roller">Develop</span>
              <span className="c2 roller">Experience</span>
              <span className="c3 roller">Build</span>
              <span className="c4 roller">Design</span>
              <span className="c1 roller">Develop</span>
              <span className="c2 roller">Experience</span>
              <span className="c3 roller">Build</span>
              <span className="c4 roller">Design</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute-position">
        <div className="fixed-position">
          <svg
            className="spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 224 224"
          >
            <path
              fill="#fff0e7"
              fill-rule="evenodd"
              d="m115.6 213.3.2 10.6h-1.4l-.2-9.5-5.6.1v-1.2h7ZM94 211.9l1.5.2 1.2 9.2 3.7-8.5 1.5.2 1.2 10.9-1.4-.2-.8-9.1-3.6 8.4-1.5-.2-1.1-9.1-3.4 8.5-1.4-.2 4.1-10.1Zm29.6.9.9 10.6-1.4.1-.8-9.4-5.6.5-.1-1.2 7-.6Zm10.6-1.7-2.3 11.2-1.5.3-5.9-9.8 1.5-.3 1.7 3 4.4-.8.6-3.4 1.5-.2Zm-2.3 4.8-3.6.6 2.6 4.6 1-5.2Zm-46-6.2c3.3.9 4.2 3.9 3.5 6.7-.7 2.8-3.1 4.9-6.4 4.1-3.3-.9-4.2-3.9-3.5-6.7.8-2.8 3.1-4.9 6.4-4.1Zm-5 4.5c-.6 2.1-.1 4.5 2.4 5.2 2.5.7 4.1-1.2 4.7-3.3.6-2.1.1-4.5-2.4-5.2-2.5-.7-4.2 1.2-4.7 3.3Zm-9.5-9.1 1.5.6c.2.5-.4 1.5-.6 2.6-.2 1-.3 1.9 1 2.4l3.2 1.2 1.6-4.2 1.3.5-3.8 9.9-4.7-1.8c-1.9-.7-2.6-2.2-2-3.8.5-1.2 1.3-2 2.7-1.9-1.1-.7-1-1.6-.7-2.6.4-1 .8-2.1.5-2.9Zm-1 7.7c-.4 1-.1 1.9 1.1 2.4l3.3 1.3 1.3-3.5-2.8-1.1c-1.2-.4-2.4-.5-2.9.9Zm-8.1-12.3 1.6.8 1 6.5 2.3-.7 1.7-3.3 1.3.6-4.8 9.5-1.3-.6 2.4-4.8-7.2 2.3-1.6-.8 5.9-1.8-1.3-7.7Zm92.8 7.3.4 1.1-10.3 4-.4-1.1 10.3-4Zm14.7-12.5 5.7 9-1.2.8-2.9-4.5-1.7 7.4-1.5 1 1.5-6-7.4-2.8 1.5-1 6.1 2.5.6-2.4-2-3.1 1.3-.9Zm7.9-6.1 6.6 8.4-3.9 3.1c-1.6 1.2-3.2 1.2-4.3-.2-.8-1-1-2.2-.2-3.3-1.1.6-1.9 0-2.6-.7-.7-.8-1.4-1.7-2.3-1.9l1.2-1c.6.1 1.1 1.1 1.9 1.8.8.7 1.5 1.3 2.6.4l2.7-2.1-2.8-3.6 1.1-.9Zm2.4 5.4-2.3 1.8c-1 .8-1.7 1.8-.8 3 .7.8 1.6 1.1 2.6.3l2.8-2.2-2.3-2.9Zm-136.9-3.2 8.7 6.8-.7.9-8.7-6.8.7-.9Zm146.7-6.4c2 2.1 2.7 5.2.2 7.6-2.4 2.4-5.5 1.6-7.5-.4-2-2.1-2.7-5.2-.2-7.6 2.4-2.4 5.5-1.7 7.5.4Zm-6.7.4c-1.9 1.8-1.1 4.2.4 5.7s3.8 2.4 5.7.6c1.9-1.8 1.1-4.2-.4-5.7s-3.9-2.4-5.7-.6Zm10.1-12.8 10 4.6-.9 1.1-8.2-4 5.4 7.4-1 1.2-8.4-3.7 5.5 7.3-.9 1.1-6.5-8.9.9-1.1 8.5 3.7-5.4-7.5 1-1.2ZM32 174.5l1 1.2-1.7 3 2.9 3.4 3.2-1.2 1 1.1-10.8 3.8-1-1.2 5.4-10.1Zm-1.2 5.2-2.6 4.6 4.9-1.9-2.3-2.7Zm-3.4-11.6 4.1 5.7L23 180l-.8-1.1 7.7-5.5-3.3-4.6.8-.7Zm-4.2-7 3.7 6-9.1 5.5-.7-1.2 8.1-4.9-2.9-4.8.9-.6Zm177.5-.1 9.2 5.4-.7 1.2-8.1-4.8-2.9 4.8-1-.6 3.5-6ZM17.1 147.8l.6 1.4-7.3 5.7 9.2-1.2.6 1.4-8.7 6.7-.6-1.3 7.3-5.4-9.1 1.3-.6-1.4 7.2-5.6-9 1.5-.6-1.3 11-1.8Zm187.2 6 9.6 4.7-.6 1.3-8.5-4.1-2.5 5.1-1.1-.5 3.1-6.5Zm4-10 8.4 7.7-.6 1.5-11.4.1.6-1.5 3.4.1 1.6-4.2-2.6-2.3.6-1.4Zm3 4.5-1.3 3.4 5.3.1-4-3.5Zm-196.5-8.5c.9 3.3-1.2 5.6-4 6.4-2.8.8-5.8-.1-6.7-3.4-.9-3.3 1.2-5.6 4-6.4 2.7-.8 5.8.1 6.7 3.4Zm-6.4-2c-2.1.6-3.9 2.2-3.2 4.7.7 2.5 3.2 2.9 5.2 2.3 2-.6 3.9-2.2 3.2-4.7-.7-2.5-3.1-2.9-5.2-2.3Zm3-12.8.3 1.6c-.4.5-1.5.4-2.5.8-1 .3-1.8.7-1.6 2.1l.6 3.4 4.5-.8.2 1.4-10.5 1.8-.9-4.9c-.3-2 .5-3.4 2.2-3.7 1.3-.2 2.4.1 3 1.4 0-1.3.9-1.7 1.9-1.9 1-.3 2.2-.5 2.8-1.2Zm204.9-.8 1.2.2-1.8 10.9-1.2-.2 1.8-10.9ZM4.2 128.1c-1 .2-1.7.9-1.5 2.2l.6 3.5 3.7-.6-.5-2.9c-.2-1.4-.8-2.5-2.3-2.2Zm6.4-13.2.1 1.8-5.1 4.2 1.8 1.6 3.7-.3.1 1.4-10.6.8-.1-1.4 5.3-.4-5.7-5-.1-1.8 4.6 4.2 6-5.1Zm213.1-10.1v1.4l-5.3.2 5.5 5.2.1 1.8-4.4-4.4-6.2 4.9-.1-1.8 5.3-4-1.7-1.7-3.7.1v-1.4l10.5-.3ZM7.4 93.6l1.2.1-1.3 11-1.2-.1 1.3-11Zm215.1.3.6 5c.3 2-.7 3.3-2.4 3.6-1.3.2-2.4-.3-2.9-1.5-.1 1.3-1 1.6-2 1.9-1 .2-2.2.3-2.8 1l-.2-1.6c.4-.5 1.5-.4 2.6-.7 1-.3 1.9-.6 1.7-2l-.4-3.4-4.5.6-.2-1.4 10.5-1.5Zm-1 1.6-3.7.5.4 2.9c.2 1.3.7 2.4 2.2 2.2 1.1-.1 1.7-.8 1.6-2.1l-.5-3.5Zm-.3-9.2c.8 3.3-1.4 5.6-4.3 6.2-2.8.7-5.8-.4-6.6-3.7-.8-3.3 1.4-5.6 4.3-6.2 2.8-.6 5.8.4 6.6 3.7Zm-6.3-2.3c-2.1.5-4 2.1-3.4 4.6.6 2.5 3 3.1 5.1 2.6 2.1-.5 4-2.1 3.4-4.6-.6-2.5-3-3.1-5.1-2.6ZM17.4 75.5l-.5 1.5h-3.4L12 81.3l2.7 2.1-.5 1.4-8.8-7.3.5-1.5 11.5-.5Zm197.3-8.4.5 1.4-7.6 5 9.1-.8.5 1.4-7.5 5.3 9.1-1 .5 1.3-11 1-.5-1.4 7.6-5.4-9.2.8-.5-1.4 9-6.2Zm-202.5 10-5.3.1 4.1 3.3 1.2-3.4Zm7.2-9.4 1.1.5-2.8 6.5L8 70.5l.6-1.3 8.7 3.7 2.1-5.2Zm3.9-7.2 1.1.6-3.4 6.2-9.4-5 .7-1.3 8.4 4.4 2.6-4.9Zm185.6-4.6.7 1.2-8.3 4.5 2.7 5-1 .6-3.4-6.2 9.3-5.1Zm-4.8-7.6.8 1.2-7.9 5.2 3.1 4.7-1 .7-3.9-5.9 8.9-5.9ZM25.6 40.4l6.9 8.6-.9 1.2-8.6-3.3 5.8 7.3-.9 1.2-10.2-4.1.9-1.2 8.4 3.6-5.7-7.2.9-1.2 8.5 3.3-5.9-7 .8-1.2Zm174 2 1 1.2-5.8 9.9-1-1.2 1.8-2.9-2.8-3.5-3.3 1-.9-1.1 11-3.4Zm-.5 1.3-5 1.6 2.2 2.8 2.8-4.4ZM37.7 35.3c2.1 2 2.9 5.1.6 7.5-2.3 2.5-5.4 1.9-7.6-.1-2.1-2-2.9-5.1-.6-7.5 2.4-2.5 5.5-1.9 7.6.1ZM31 36c-1.8 1.9-.9 4.2.7 5.7s3.9 2.2 5.7.3c1.8-1.9.9-4.2-.7-5.7-1.5-1.4-3.9-2.2-5.7-.3Zm12.8-9.3c.8 1 1.1 2.1.4 3.3 1.1-.6 1.9-.1 2.6.6.7.7 1.5 1.7 2.4 1.8l-1.2 1c-.6-.1-1.2-1.1-2-1.7-.8-.7-1.6-1.2-2.6-.3l-2.6 2.3 3 3.4-1.1.9-7-8 3.8-3.3c1.5-1.3 3.1-1.3 4.3 0Zm133 1.2 8.4 7.2-.8.9-8.4-7.2.8-.9Zm-136.6-.3-2.7 2.3 2.4 2.8 2.2-1.9c1-.9 1.6-1.9.6-3-.6-.8-1.5-1-2.5-.2Zm11-9.8L50 23.9l7.5 2.5-1.5 1-6.3-2.2-.5 2.4 2.2 3-1.2.8-6.2-8.7 1.2-.8 3.1 4.3 1.3-7.5 1.6-.9Zm112-5.4 1.2.7-2.6 4.6 7.3-2 1.6.9-6 1.6 1 7.8-1.6-.9-.7-6.6-2.4.6-1.8 3.3-1.2-.7 5.2-9.3Zm-10-4.6 4.6 2c1.8.8 2.5 2.3 1.8 3.9-.5 1.2-1.4 1.9-2.8 1.7 1 .7.9 1.7.6 2.6-.3 1-.9 2-.6 2.9l-1.4-.6c-.2-.6.5-1.5.7-2.6.3-1 .4-1.9-.9-2.5L152 14l-1.8 4.2-1.3-.6 4.3-9.8Zm-79.2 5 .5 1.1-10.1 4.5-.4-1.1 10-4.5ZM146 5c3.2 1 4.1 4.1 3.2 6.9-.9 2.8-3.3 4.8-6.5 3.8s-4-4.1-3.2-6.9C140.4 6 142.8 4 146 5Zm-5.2 4.2c-.7 2-.3 4.5 2.2 5.3 2.5.8 4.2-1 4.8-3.1.7-2 .3-4.5-2.2-5.3-2.4-.7-4.1 1.1-4.8 3.1Zm13.2.3-1.5 3.4 2.7 1.2c1.2.5 2.4.7 3-.7.4-1 .2-1.9-1-2.4L154 9.5ZM126.2.7l1.4.3.4 9.1 4-8.3 1.5.3.7 9.1L138 3l1.4.3-4.8 9.9-1.5-.3-.7-9.2-4.1 8.3-1.5-.3-.6-11ZM98.8.8l5.4 10.1-1.6.2-1.6-3-4.5.6-.8 3.3-1.5.2 3-11.2 1.6-.2Zm14.8-.8 1.4.1-.4 9.5 5.6.2V11l-7-.3.4-10.7Zm-7.5.2.4 9.5 5.6-.2v1.2l-7 .3-.4-10.6 1.4-.2Zm-8 2-1.2 5.2 3.6-.4-2.4-4.8Z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="arrow">
            <a href="#Project" spy={true} smooth={true} data-scroll-to>
              <svg
                className="arrowP"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 117 117"
              >
                <path
                  className="path"
                  d="M107 117c5.523 0 10-4.477 10-10V17c0-5.5228-4.477-10-10-10s-10 4.4772-10 10v80H17c-5.5228 0-10 4.477-10 10s4.4772 10 10 10h90ZM.928932 15.0711 99.9289 114.071l14.1421-14.1421L15.0711.928932.928932 15.0711Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="loop-holder">
        <LoopHolder />
        <LoopHolder />
        <LoopHolder />
        <LoopHolder />
        <LoopHolder />
        <LoopHolder />
      </div>
    </div>
  );
};

export default Hero;
