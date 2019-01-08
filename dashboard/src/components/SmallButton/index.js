import React from 'react';
import './styles.css';

export default function SmallButton( children ) {
  return (
    <div className="smallButton">
      <div className="smallButtonValue">
        {children}
      </div>
    </div>
  )
}