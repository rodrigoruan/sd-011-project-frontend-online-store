import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartItem from './ShoppingCartItem';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: [
        {
          id: 'teste1',
          title: 'title teste1',
          thumbnail: 'teste1',
          quantity: 1,
          price: 10,
        },
        {
          id: 'teste2',
          title: 'title teste2',
          thumbnail: 'teste2',
          quantity: 1,
          price: 3,
        }
      ]
    }
  }
  
  render() {
    const { shoppingCart } = this.state;
    return (
      <div className="shopping-cart-page">
        <div className="button-back">
          <Link to="/">Voltar</Link>
        </div>
        <div className="page-title">
          <h2>Carrinho de Compras</h2>
        </div>
        <div className="shopping-cart-products-list">
          { shoppingCart.map((product) => (
            <ShoppingCartItem
              key={ product.id}
              item={ product }
            />)) 
          }
        </div>
        </div>
    );
  }
}
