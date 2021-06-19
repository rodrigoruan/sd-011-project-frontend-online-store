import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Cart from './Cart';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.cartItensStorage = this.cartItensStorage.bind(this);
  }

  cartItensStorage() {
    let previousList = localStorage.getItem('cartList');
    if (previousList === null) {
      previousList = {};
      return previousList;
    }
    return JSON.parse(previousList);
  }

  render() {
    const details = this.cartItensStorage();
    const productArray = Object.values(details);

    return (
      <div>
        <Link to="/">
          Página Inicial
        </Link>
        { (!productArray)
          ? <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
          : productArray
            .map((product, index) => <Cart key={ index } product={ product } />) }

        <h4>
          Você possui
          { ` ${productArray.length} ` }
          itens no carrinho
        </h4>
      </div>
    );
  }
}

export default ShoppingCart;
