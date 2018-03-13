import React from 'react';
import MaterialIcon from 'material-icons-react';
import './styles.css';

export default function Header( data ) {
  return (
    <div className="header">
      <div className="headerTitle">Dashboard</div>
      <div className="message">Welcome {data.user}</div>
      <div className="links">
      </div>
    </div>
  );
}