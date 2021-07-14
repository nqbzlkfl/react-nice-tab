import React from 'react';
import './style.scss';

export default (props) => {
  const { data, onChange, value } = props;
  if (data.length === 0) return null;

  let selectedIndex = 0;
  data.forEach((d, index) => {
    if (d.label === value) {
      selectedIndex = index;
    }
  });

  const highlighter_width_percent = 100 / data.length;

  return (
    <div className="gradient-slider-container">
      {data?.map((d, index) => {
        const isActive = index === selectedIndex;
        return (
          <div
            key={d.label}
            onClick={() => onChange(d.label)}
            className="gradient-slider-label"
            aria-hidden="true"
            style={{ color: isActive ? 'white' : '#707070' }}
          >
            {d.label}
          </div>
        );
      })}
      <div
        className="gradient-slider-highlight"
        style={{
          width: `${highlighter_width_percent}%`,
          left: `${highlighter_width_percent * selectedIndex}%`,
        }}
      />
    </div>
  );
};
