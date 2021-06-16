import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import Main from './Pages/Main';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Main } />
            <Route
              exact
              path="/product/:id"
              component={ ProductDetail }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
