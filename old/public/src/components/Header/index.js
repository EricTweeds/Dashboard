import React from 'react';
import styles from './styles.css';

export default function Header ({ props }) {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Eric Tweedle</div>
    </div>
  )
}