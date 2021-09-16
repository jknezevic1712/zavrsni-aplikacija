import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// REDUX COMPONENTS
import {createStore} from 'redux';
// ak imas index.js, tj njega trebas, samo ce njega odabrat po defaultu, ne moras specificirat taj file
import allReducers from './components/reducers';
import {Provider} from 'react-redux';

// REDUX STORE
const knjiznica = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


ReactDOM.render(
  <React.StrictMode>
    <Provider store={knjiznica}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
