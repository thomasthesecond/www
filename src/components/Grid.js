import React from 'react';
import styles from './Grid.module.css';

const classNames = (override) => {
  return `${styles.grid} ${override ? override : ''}`;
}

const inlineStyles = (rows) => {
  const s = {};

  if (rows) {
    s.gridTemplateRows = `repeat(${rows}, auto)`;
  }

  return s;
}

export const Grid = ({ children, classOverride, rows }) => {
  return (
    <div className={classNames(classOverride)} style={inlineStyles(rows)}>
      {children}
    </div>
  );
};

export const Row = ({ children }) => {
  return (
    <div className={styles.fullRow}>
      {children}
    </div>
  );
};
