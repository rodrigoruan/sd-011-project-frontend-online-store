import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>

      </div>

    );
  }
}
