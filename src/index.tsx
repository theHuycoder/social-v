import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import ReduxProvider from './redux/redux-provider';
import {browserHistory} from "./helpers/history.helpers";
import "./services/axios/index";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router history={browserHistory}>
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
