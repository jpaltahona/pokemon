import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import combineReducers from './Redux/Reducers/index';

const store = createStore(combineReducers,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
