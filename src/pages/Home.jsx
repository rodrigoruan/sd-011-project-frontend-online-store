import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search">
          <input type="text" name="search" />
        </label>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default Home;
