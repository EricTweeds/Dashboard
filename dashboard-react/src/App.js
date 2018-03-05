import React, { Component } from 'react';
import Status from './features/status/index.js';
import Recent from './features/recent/index.js';
import Header from './components/header/index.js';

class App extends Component {
  render() {
    const data = {
      user: 'Eric'
    };
    return (
      <div>
        <Header {...data}/>
        <Status />
        <Recent />
      </div>
    );
  }
}

export default App;
