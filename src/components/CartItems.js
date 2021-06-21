import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddAndRemoveCartItem from './AddAndRemoveCartItem';

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
        {allProducts.map(({ title, thumbnail, price, count }, index) => (
          <div key={ index }>
            <h3 data-testid="shopping-cart-product-name">
              {`${title} - R$${price}`}
            </h3>
            <img src={ thumbnail } alt={ title } />
            <br />
            <span data-testid="shopping-cart-product-quantity">
              { count }
            </span>
            <br />
            <br />
            <div>
              <AddAndRemoveCartItem
                title={ title }
                price={ price }
                thumbnail={ thumbnail }
                onClick={ this.getLocalStorage }
              />
            </div>
            <h5>{ `Valor do(s) produto(s): R$${count * price}` }</h5>
            <br />
            <br />
            <br />
          </div>
        ))}
        <span>
          O valor total é: R$
          {allProducts.reduce((acc, { price, count }) => acc + price * count, 0)}
        </span>
        <br />
        <Link to="/">
          Voltar
        </Link>
      </div>
    );
  }
}
