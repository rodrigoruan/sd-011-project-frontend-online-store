import React from 'react';
import { Link } from 'react-router-dom';

export default class ProductsList extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          Carrinho
        </Link>
      </div>
    );
  }
}
