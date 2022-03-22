import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contador from './Contador.jsx';
import Estados from './Estados.jsx';
import Login from './Login.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Estados />
  </React.StrictMode>,
  document.getElementById('ejercicio1')
);

ReactDOM.render(
  <React.StrictMode>
    <Contador />
  </React.StrictMode>,
  document.getElementById('ejercicio2')
);

ReactDOM.render(
  <React.StrictMode>
    <Login nomApp="ROCKET" />
  </React.StrictMode>,
  document.getElementById('ejercicio3')
);

ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('ejercicio4')
);

ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('ejercicio5')
);

/*
*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
