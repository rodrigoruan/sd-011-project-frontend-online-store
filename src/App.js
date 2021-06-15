import './App.css';
import React, { Component } from 'react';
import * as api from './services/api';
import Home from './components/StartingPage';

export default class App extends Component {
  componentDidMount() {
    api.getCategories();
    api.getProductsFromCategoryAndQuery();
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}
