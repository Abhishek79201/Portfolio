import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    <div className="content">
      <div className="big-text">
        <div className="wrapper">
          <p className="lets">Let's</p>
          <div className="words">
            <span className="roller" style={{ color: '#FAEBD7' }}>
              Design
            </span>
            <span className="roller" style={{ color: '#5a2add' }}>
              Develop
            </span>
            <span className="roller" style={{ color: '#c584ff' }}>
              Build
            </span>
            <span className="roller" style={{ color: '#65baa9' }}>
              Experience
            </span>
            <span className="roller" style={{ color: '#FAEBD7' }}>
              Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
