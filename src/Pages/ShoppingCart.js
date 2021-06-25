import React from 'react';
import { Link } from 'react-router-dom';
import CartList from '../CartList';

class ShoppingCart extends React.Component {
  render() {
    const productFromDetails = JSON.parse(localStorage.getItem('productList'));
    if (productFromDetails === null || productFromDetails.length === 0) {
      return (
        <div>
          <h3 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h3>
          <Link to="/">Voltar à Home</Link>
        </div>);
    }
    return (
      <div>
        {productFromDetails.map((product) => (
          <CartList key={ product.title } product={ product } />
        ))}
        <Link to="/">Voltar à Home</Link>
      </div>
    );
  }
}

export default ShoppingCart; //
