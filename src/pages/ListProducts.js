import React, { Component } from 'react';
import Button from '../Components/ButtonShopCart';
import CategoryList from '../Components/CategoryList';

class ListProducts extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <CategoryList />
        <input type="text" />
        <Button />
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
    );
  }
}

export default ListProducts;
