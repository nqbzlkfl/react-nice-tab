import React from 'react';
import './style.scss';

export default (props) => {
  let styles = {
    foreground: '#3BAFDA',
    background: '#060A2F',
    borderRadius: 30,
  };
  const {
    data = [
      { label: 'Demo 1', value: 1 },
      { label: 'Demo 2', value: 2 },
      { label: 'Demo 3', value: 3 },
    ],
    onChange = () => null,
    value = 2,
    style = {},
  } = props;
  styles = { ...styles, ...style };

  if (data.length === 0) return null;

  const idx = data.findIndex(d => d.value === value);
  const selectedIndex = idx === -1 ? 0 : idx;

  const highlighter_width_percent = 100 / data.length;

  return (
    <div
      className="react-nice-tab-container"
      style={{
        background: styles.background,
        borderRadius: styles.borderRadius,
      }}
    >
      {data?.map((d, index) => {
        const isActive = index === selectedIndex;
        return (
          <div
            key={d.label}
            onClick={() => onChange(d.label)}
            className="react-nice-tab-label"
            aria-hidden="true"
            style={{ color: isActive ? styles.background : styles.foreground }}
          >
            {d.label}
          </div>
        );
      })}
      <div
        className="react-nice-tab-highlight"
        style={{
          background: styles.foreground,
          borderRadius: styles.borderRadius,
          width: `${highlighter_width_percent}%`,
          left: `${highlighter_width_percent * selectedIndex}%`,
        }}
      />
    </div>
  );
};
