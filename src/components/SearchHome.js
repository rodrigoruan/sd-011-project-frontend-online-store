import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchHome extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="search">
          <input type="text" name="search" />
        </label>
        <Link to="/ShoppingCart">
          <button data-testid="shopping-cart-button" type="button">Carrinho</button>
        </Link>
        <div>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    );
  }
}
