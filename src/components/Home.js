import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Filtros from './Filtros';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Filtros />
        <Link to="/ShoppingCart">
          <button data-testid="shopping-cart-button" type="button">
            Carrinho de Compras
          </button>
        </Link>
      </div>
    );
  }
}
