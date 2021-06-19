import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.setProductStates = this.setProductStates.bind(this);
  }

  componentDidMount() {
    this.setProductStates();
  }

  setProductStates() {
    const storage = localStorage;
    this.setState((storage));
  }

  render() {
    console.log(this.state);
    const storage = Object.keys(localStorage);
    const cartItems = storage.map((key) => {
      const item = JSON.parse(localStorage[key]);
      return item;
    });
    console.log(cartItems);
    return (
      <div>
        {
          (cartItems.length === 0)
            ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
            : cartItems.map((product, index) => (
              <div key={ index }>
                <button type="button" onClick={ () => console.log('remover') }>X</button>
                <img src={ product.thumbnail } alt={ product.title } />
                <p data-testid="shopping-cart-product-name">{ product.title }</p>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => console.log('menos') }
                >
                  -
                </button>
                <p data-testid="shopping-cart-product-quantity">{product.counter}</p>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ this.setItem }
                >
                  +
                </button>
              </div>
            ))
        }
        <h2>
          Valor Total de:
          {cartItems.reduce((acc, cur) => acc + cur.price * cur.counter, 0)}
        </h2>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}
