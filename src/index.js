import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReduser from './store/reducer';
import App from './App';
import {watchProducts} from './store/sagas';
import 'normalize.css';



const composeEnchancer = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReduser,
  composeEnchancer(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(watchProducts);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
,document.getElementById('root'))