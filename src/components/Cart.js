import React, { Component } from 'react';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getItemLocalStorage();
  }

  getItemLocalStorage = () => {
    const getProducts = { ...localStorage };
    const arrayOfproducts = Object.values(getProducts).map((e) => JSON.parse(e));
    this.setState({ products: arrayOfproducts });
  };

  render() {
    const { products } = this.state;

    if (!products.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        {products.map(
          ({ counter, title, price, thumbnail, id }) => (
            <div key={ id }>
              <p data-testid="shopping-cart-product-name">{title}</p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                { counter }
              </p>
              <img src={ thumbnail } alt={ title } />
              <p>
                R$
                {price}
              </p>
            </div>
          ),
        )}
      </div>
    );
  }
}
