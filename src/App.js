import React, { Component } from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import Status from './features/status/index.js';
import Recent from './features/recent/index.js';
import Weather from './features/weather/index.js';
import Header from './components/header/index.js';
import { loadWeatherFlow, loadRecent } from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(loadWeatherFlow);
sagaMiddleware.run(loadRecent);

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
          <Weather />
          <Recent />
        </div>
      </Provider>
    );
  }
}

export default App;
