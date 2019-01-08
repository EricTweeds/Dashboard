import React from 'react';
import './styles.css';

export default function RoundButton( children ) {
  return (
    <div className="roundButton">
      <div className="roundButtonValue">
        {children}
      </div>
    </div>
  )
}