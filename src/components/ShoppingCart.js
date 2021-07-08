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

  itemsOnCart() {
    const details = this.loadCartList();
    const productArray = Object.values(details);
    const oneToNine = 10;

    if (productArray.length === 1) {
      return 'Você possui 01 item no carrinho';
    }
    if (productArray.length < oneToNine) {
      return `Você possui 0${productArray.length} items no carrinho`;
    }

    return `Você possui ${productArray.length} items no carrinho`;
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

        <h4>
          {this.itemsOnCart()}
        </h4>
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">Checkout</button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
