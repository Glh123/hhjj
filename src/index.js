import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './page/home/index';
import Detail from './page/detail/index'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  (
    <HashRouter>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/detail' component={Detail} />
      </Switch>
    </HashRouter>
  ),
  document.getElementById('root')
);

reportWebVitals();
