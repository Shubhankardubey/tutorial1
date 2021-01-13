import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Contact';
import About from './About';
import NotFound from './notfound';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';

let value = false

const routing = (
  <Router>
<div>
  <Switch>
  <Route exact path="/" component={App} />
  <Route exact path="/about">
  {value ? <Redirect to="/contact" /> : <About />}
  </Route>
  <Route exact path="/contact" component={Contact} />
  <Route component={NotFound} />
  </Switch>
</div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
