import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: '',
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <p>ShoppingCart</p>
        {!products ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          <p>carrinho com alguma coisa</p>
        )}
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default ShoppingCart;
