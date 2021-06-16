import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

class Home extends Component {
  render() {
    return (
      <div>
        <CategoryList />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">Botão</Link>
      </div>
    );
  }
}

export default Home;
