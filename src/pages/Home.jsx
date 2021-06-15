import React, { Component } from 'react';
import CategoryList from '../components/CategoryList';

class Home extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search">
          <input type="text" name="search" />
        </label>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <CategoryList />
      </div>
    );
  }
}

export default Home;
