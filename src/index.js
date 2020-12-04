import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './globalStyles/reset.css';
import './globalStyles/button.css';
import './globalStyles/formgroup.css';
import './globalStyles/result.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);