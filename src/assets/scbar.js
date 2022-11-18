import React, { useState, useEffect } from 'react';

const Scbar = () => {
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
      <div
        id="progressBar"
        style={{
          width: `${scrollTop * 1.1}% `,
          opacity: `${scrollTop}%`,
          zIndex: `99999999`,
        }}
      ></div>
      <div id="progressBarContainer"></div>
    </div>
  );
};

export default Scbar;
