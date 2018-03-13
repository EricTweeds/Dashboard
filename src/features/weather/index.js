import React, { Component } from 'react';
import '../../App.css';
import './styles.css';

export default class Weather extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      {
        name: 'Inside',
        temp: 20,
        state: 'Loud' //Based on time of day?
      },
      {
        name: 'Current',
        temp: 2,
        state: 'Snowing'
      },
      {
        name: 'Tomorrow',
        temp: 5,
        state: 'Sunny'
      }
    ];
    return (
      <div className="root">
        <div className="title">Weather</div>
        <div className="weatherCategories">
          {data.map(type => (
            <div className="container">
              <div className="containerTitle">{type.name}</div>
              <div className="tempContainer">
                <div className="temperature">Temperature:</div>
                <div className="temperature">{type.temp}&deg;C</div>
              </div>
              <div className="tempContainer">
                <div className="temperature">Conditions:</div>
                <div className="temperature">{type.state}</div>
              </div>
            </div>
          ))}            
        </div>
     </div>
    );
  }
}
