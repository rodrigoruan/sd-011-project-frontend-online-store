import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductDetail extends Component {
  constructor({ location }) {
    super({ location });
    this.state = location.state;
  }

  addToCart({ target: { value } }) {
    const key = JSON.parse(value).title;
    localStorage.setItem(key, value);
  }

  render() {
    const { title, thumbnail, price } = this.state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <h3 data-testid="product-detail-name">{title}</h3>
        <h3>{ price }</h3>
        <img src={ thumbnail } alt={ title } />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
          value={ JSON.stringify({ title, price, thumbnail, quantity: 1 }) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.object,
}.isRequired;
