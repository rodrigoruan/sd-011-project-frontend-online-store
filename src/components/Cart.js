import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      count: arrayOfproducts,
    });
  };

  handleClick = ({ target: { id, name } }) => {
    const product = JSON.parse(localStorage.getItem(id));

    if (name === 'add' && product.counter < product.availableQuantity) {
      product.counter += 1;
      console.log(product.counter);
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
  };

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
        {products.map(({ title, price, thumbnail, id, availableQuantity }) => (
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
              disabled={
                availableQuantity
                === count.find((item) => item.title === title).counter
              }
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
        <Link to={ { pathname: '/checkout' } }>
          <button data-testid="checkout-products" type="button">
            Comprar
          </button>
        </Link>
      </div>
    );
  }
}
