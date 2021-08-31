import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';



Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [
      (dd>9 ? '' : '0') + dd,
      (mm>9 ? '' : '0') + mm,
      this.getFullYear()
  ].join('.');
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

