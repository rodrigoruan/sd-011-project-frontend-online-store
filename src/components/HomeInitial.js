import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../Images/cart.png';

class HomeInitial extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="search-bar">
            <input type="text" placeholder="Search" id="search-bar" />
          </label>
        </form>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <div>
          <Link to="/carrinho-compras">
            <img
              src={ cart }
              alt="carrinho-compras"
              data-testid="shopping-cart-button"
              height="200px"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeInitial;
