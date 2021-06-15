import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search-text" data-testid="home-initial-message">
          <input type="text" name="search-text" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <Link data-testid="shopping-cart-button" to="/cartitems">
          Carrinho de compras
        </Link>
      </div>
    );
  }
}
