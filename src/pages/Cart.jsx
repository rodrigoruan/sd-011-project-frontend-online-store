import React, { Component } from 'react';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  updateState(props) {
    this.setState((prevState) => {
      return {
        products: [...prevState.products, props],
      }
    })
  }

  render() {
    const { products } = this.state;

    if (!products.length) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
    }

    return (
      <div className="cart-container">
        { products.map((product) => {
          return (
            <div className="product-card">
              <h3>{ product.title }</h3>
              <img src={ product.thumbnail } alt="" />
              <p>Valor: { product.price} </p>
            </div>
          )
        }) }
      </div>
    );
  }
}
