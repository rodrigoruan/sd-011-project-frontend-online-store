import React, { Component } from 'react';
import CategoryList from './CategoryList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <CategoryList />
        </div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
