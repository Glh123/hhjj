import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './component/header'
import Home from './page/home/index';
import Detail from './page/detail/index'
import List from './page//List/index'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/home' component={Home} />
          <Route path='/detail' component={Detail} />
          <Route path='/list' component={List} />
        </Switch>
      </BrowserRouter>
    </div>
  ),
  document.getElementById('root')
);

reportWebVitals();
