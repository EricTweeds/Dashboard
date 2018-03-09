import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import Time from 'react-time-format';
import './styles.css';


export default class Recent extends Component {
  render() {
    const data = [
      {
        name: 'Lights',
        icon: 'lightbulb_outline',
        lastAccessed: 1520272350
      },
      {
        name: 'tunes',
        icon: 'music_note',
        lastAccessed: 1520272350
      },
      {
        name: 'network',
        icon: 'network_check',
        lastAccessed: 1520272350
      }
    ];
    return (
      <div className="recent">
        <div className="recentTitle">Recent</div>
        <div className="containers">
        {data.map(activity => (
          <div className="container">
            <div className="name">{activity.name}</div>
            <div className="item">
              <MaterialIcon icon={activity.icon} size='large' invert />
            </div>
            <div className="item">
              <Time value={activity.lastAccessed * 1000} format="YY-MM-DD"/>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}