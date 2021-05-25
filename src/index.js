import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import StockControlApp from './Components/StockControlApp';
import 'semantic-ui-css/semantic.min.css'
import store from './Store/Store';


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <StockControlApp />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);