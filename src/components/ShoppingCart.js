import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Cart from './Cart';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.loadCartList = this.loadCartList.bind(this);
  }

  loadCartList() {
    let previousList = localStorage.getItem('cartList');
    if (previousList === null) {
      previousList = {};
      return previousList;
    }
    return JSON.parse(previousList);
  }

  render() {
    const details = this.loadCartList();
    const productArray = Object.values(details);

    return (
      <div>
        <Link to="/">
          Página Inicial
        </Link>
        { (productArray.length === 0)
          ? <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
          : productArray
            .map((product, index) => <Cart key={ index } product={ product } />) }

        <h4 data-testid="shopping-cart-product-quantity">
          Você possui
          { ` ${productArray.length} ` }
          itens no carrinho
        </h4>
      </div>
    );
  }
}

export default ShoppingCart;
