import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import App from './components/App.js';
// import rootReducer from './reducers/index.js'
// import { setCategories } from './actions/index.js';
import './index.css';

ReactDOM.render(
    <App />, document.getElementById('root')
  );