import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route } from 'react-router-dom'
import App from './page/home/index';
// import Detail from './page/detail/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  // <Detail />,
  // <Router>
  //   <Route path="/" component={App} />
  //   <Route path="/home" component={App} />
  // </Router>,
  document.getElementById('root')
);

reportWebVitals();
