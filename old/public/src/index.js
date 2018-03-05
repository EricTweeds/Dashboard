import React, { Component } from 'react';
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Switch from 'react-router-dom/Switch';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Home from './containers/Home';
import PageNotFound from './components/PageNotFound';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component = {Home}/>
                        <Route component = {PageNotFound}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
  }
}