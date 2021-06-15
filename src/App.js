import './App.css';
import * as api from './services/api';
import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    api.getCategories();
    api.getProductsFromCategoryAndQuery();
  }

  render() {
    return <div>Ok</div>;
  }
}
