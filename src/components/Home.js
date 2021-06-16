import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryBar from './CategoryBar';

class Home extends Component {
  render() {
    return (
      <div>
        <CategoryBar />
        <input />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho!</Link>
      </div>
    );
  }
}

export default Home;
