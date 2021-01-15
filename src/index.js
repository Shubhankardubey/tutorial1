import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Contact';
import About from './About';
import NotFound from './notfound';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from 'react-router-dom';

let value = false

const routing = (
  <BrowserRouter>
<App/>
  </BrowserRouter>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
