import './project.scss';
import React from 'react';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scorlled = (winScroll / height) * 100;
    setScrollTop(scorlled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      <div className="project">
        <div className="container b2">
          <h1
            className="title"
            style={{
              left: `${scrollTop / 2.5}%`,
            }}
          >
            {' '}
            Projects
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
