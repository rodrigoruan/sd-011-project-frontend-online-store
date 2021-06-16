import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import CategorieNav from './CategorieNav';
import SearchBar from './SearchBar';

export default class MainPage extends Component {
  render() {
    return (
      <div className="main">
        <CategorieNav />
        <SearchBar />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img
            src="images/Carrinho-de-Compras.png"
            alt="Carrinho de Compras"
            width="50px"
          />
        </Link>
      </div>
    );
  }
}
