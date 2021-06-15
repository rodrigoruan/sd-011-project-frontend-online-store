import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as api from './services/api';
import Home from './Home';

class App extends Component {
  componentDidMount() {
    api.getCategories();
    api.getProductsFromCategoryAndQuery();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
