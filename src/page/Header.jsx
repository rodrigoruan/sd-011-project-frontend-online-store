import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import CategorieNav from './CategorieNav';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="main">
        <CategorieNav />
        <div>
          <input type="text" />
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img
              src="images/Carrinho-de-Compras.png"
              alt="Carrinho de Compras"
              width="50px"
            />
          </Link>
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </div>
      </div>
    );
  }
}
