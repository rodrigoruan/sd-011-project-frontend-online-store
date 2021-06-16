import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategorieList from '../components/CategorieList';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img
            src="images/Carrinho-de-Compras.png"
            alt="Carrinho de Compras"
            width="50px"
          />
        </Link>
        <CategorieList />
      </div>
    );
  }
}
