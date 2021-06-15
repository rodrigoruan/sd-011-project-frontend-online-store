import React, { Component } from 'react';
import './App.css';
import * as api from './services/api';

class App extends Component {

  componentDidMount() {
    api.getCategories();
    api.getProductsFromCategoryAndQuery();
  }

  render() {
    return (
      <div>
        Test
      </div>
    );
  }
}

export default App;
