import React, { Component } from 'react';

export default class CartItems extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: [],
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const getStorage = { ...localStorage }; // O spread operator, espalha, distribui todo o objeto, na variavel;
    const itemProduct = Object.values(getStorage).map((item) => JSON.parse(item));
    this.setState({
      allProducts: itemProduct,
      sumItens: 0,
      totalValue: 0,
    });
  }

  render() {
    const { allProducts } = this.state;

    if (!allProducts.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }

    return (
      <div>
        {allProducts.map(({ title, thumbnail, price, count, totalValue }, index) => (
          <div key={ index }>
            <h3 data-testid="shopping-cart-product-name">
              {`${title} - R$${price}`}
            </h3>
            <img src={ thumbnail } alt={ title } />
            <span data-testid="shopping-cart-product-quantity">
              { count }
            </span>
            <h2>{ `Valor do(s) produto(s): R$${count * price}` }</h2>
          </div>
        ))}
      </div>
    );
  }
}
