import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './component/header'
import Home from './page/home/index';
import Detail from './page/detail/index'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/home' component={Home} />
          <Route path='/detail' component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  ),
  document.getElementById('root')
);

reportWebVitals();
