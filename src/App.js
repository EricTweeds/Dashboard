import React, { Component } from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import sagas from './sagas';
import Status from './features/status/index.js';
import Recent from './features/recent/index.js';
import Weather from './features/weather/index.js';
import Header from './components/header/index.js';
import Lights from './features/lights/index';
import WhosOnline from './features/whosOnline/index';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagas.forEach(saga => {
  sagaMiddleware.run(saga);
});

class App extends Component {
  render() {
    const data = {
      user: 'Eric'
    };
    return (
      <Provider store={store}>
        <div>
          <Header {...data}/>
          <Status />
          <WhosOnline />
          <Weather />
          <Recent />
          <Lights />
        </div>
      </Provider>
    );
  }
}

export default App;
