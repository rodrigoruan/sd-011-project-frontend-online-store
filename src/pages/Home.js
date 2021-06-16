import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imageTwo from '../imgs/Carrinho.png';
import ProductSearch from '../components/ProductSearch';

class Home extends Component {
  render() {
    return (
      <>
        <ProductSearch />
        <Link to="/ShoppingCart">
          <img
            width="30px"
            src={ imageTwo }
            alt="imagem do carrinho"
          />
        </Link>
        <main data-testid="shopping-cart-button" />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </>
    );
  }
}
export default Home;
