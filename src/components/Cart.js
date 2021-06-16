import React, { Component } from 'react';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      count: 0,
    };
  }

  componentDidMount() {
    this.getItemLocalStorage();
  }

  getItemLocalStorage = () => {
    const getProducts = { ...localStorage };
    const arrayOfproducts = Object.values(getProducts).map((e) => JSON.parse(e));
    this.setState({
      products: arrayOfproducts,
      count: arrayOfproducts.map(({ counter, title }) => ({ counter, title })),
    });
  };

  handleClick = ({ target: { id, name } }) => {
    const product = JSON.parse(localStorage.getItem(id));
    if (name === 'add') {
      product.counter += 1;
    }
    if (name === 'sub' && product.counter > 1) {
      product.counter -= 1;
    }
    localStorage.setItem(id, JSON.stringify(product));
    this.getItemLocalStorage();
  };

  handleDelete = ({ target: { id } }) => {
    localStorage.removeItem(id);
    this.getItemLocalStorage();
  }

  render() {
    const { count } = this.state;
    const { products } = this.state;

    if (!products.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        {products.map(({ title, price, thumbnail, id }) => (
          <div key={ id }>
            <p data-testid="shopping-cart-product-name">{title}</p>
            <img src={ thumbnail } alt={ title } />
            <p>
              R$
              {price}
            </p>
            <p data-testid="shopping-cart-product-quantity">
              {count.find((item) => item.title === title).counter}
            </p>
            <button
              data-testid="product-increase-quantity"
              type="button"
              name="add"
              id={ title }
              onClick={ this.handleClick }
            >
              (+)
            </button>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              name="sub"
              id={ title }
              onClick={ this.handleClick }
            >
              (-)
            </button>
            <button
              type="button"
              name="delete"
              id={ title }
              onClick={ this.handleDelete }
            >
              (X)
            </button>
          </div>
        ))}
      </div>
    );
  }
}
