import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Reducer from './reducers';
import rootSaga from './sagas/tasks';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
/* eslint-enable */

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
