import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartImage from '../images/shoppingCart.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ shoppingCartImage } alt="Cart" />
        </Link>
      </div>
    );
  }
}

export default Home;
