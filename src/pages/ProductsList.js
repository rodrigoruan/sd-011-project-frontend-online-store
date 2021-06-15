import React from 'react';
import CategoryFilter from './CategoryFilter';

export default class ProductsList extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoryFilter />
      </div>
    );
  }
}
