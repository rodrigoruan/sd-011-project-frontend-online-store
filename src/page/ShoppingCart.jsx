import React, { Component } from 'react';
import ProductStorage from '../components/ProductStorage';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      local: '',
    };
    this.recuperaLocalStorage = this.recuperaLocalStorage.bind(this);
  }

  componentDidMount() {
    this.recuperaLocalStorage();
  }

  recuperaLocalStorage() {
    this.setState({
      local: JSON.parse(localStorage.getItem('product')),
    });
  }

  render() {
    const { local } = this.state;
    return !local ? <h1>Seu carrinho está vazio</h1> : (
      <div>
        <p data-testid="shopping-cart-product-quantity">
          {`Produtos: ${local.length}`}
        </p>
        <div
          data-testid="shopping-cart-empty-message"
        >
          {local.map((item, index) => <ProductStorage key={ index } item={ item } />)}
        </div>
      </div>
    );
  }
}
