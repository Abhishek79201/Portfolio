import React from 'react';
import './sectionHeader.css';

function SectionHeader({ title }) {
  return <h1 className="section-header">{title}</h1>;
}
function LoopHolder() {
  const d = new Date();
  let month = d.getMonth();
  let date = d.getDate();
  let mL = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  month = mL[month];

  function isDate2Digit(date) {
    if (date < 10) {
      return '0' + date;
    }
    return date;
  }

  return (
    <div className="loop-holder__text">
      <div className="availability">
        <div className="avail-container">
          <div className="Date_div">
            <span id="date">{isDate2Digit(date)}</span>
          </div>
          <div className="info_div">
            <span id="month">{month}</span>
            <span className="Avail">available for work</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SectionHeader, LoopHolder };
