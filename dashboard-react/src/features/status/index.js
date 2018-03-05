import React, { Component }  from 'react';
import Clock from '../../components/clock/index.js';
import './styles.css';

export default class Status extends Component {
  render() {
    return (
      <div className="status">
          <div className="statusTitle">Status</div>
          <div className="clockContainer">
            <Clock />
          </div>
      </div>
    )
  }
}