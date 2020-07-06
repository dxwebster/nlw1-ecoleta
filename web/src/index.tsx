import React from 'react';
import ReactDOM from 'react-dom'; //diz para o react que nosso projeto é pra web
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')// renderiza o App dentro da div root
);