import React, { Component }  from 'react';
import Clock from '../../components/clock/index.js';
import '../../App.css';
import './styles.css';

export default class Status extends Component {
  render() {
    return (
      <div className="root">
          <div className="title">Status</div>
          <div className="clockContainer">
            <Clock />
          </div>
      </div>
    )
  }
}