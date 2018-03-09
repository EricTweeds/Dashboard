import React from 'react';
import MaterialIcon from 'material-icons-react';
import './styles.css';

export default function Header( data ) {
  return (
    <div className="root">
      <div className="title">Dashboard</div>
      <div className="message">Welcome {data.user}</div>
      <div className="links">
      </div>
    </div>
  );
}