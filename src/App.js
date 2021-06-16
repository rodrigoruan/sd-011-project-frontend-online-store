import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as api from './services/api';
import Home from './components/Home';
import Cart from './pages/Cart';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/Cart" component={ Cart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
