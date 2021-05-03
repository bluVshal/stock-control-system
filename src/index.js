import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StockControlApp from './Components/StockControlApp';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <StockControlApp />
  </React.StrictMode>,
  document.getElementById('root')
);