import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  constructor() {
    super();
    this.addCart = this.addCart.bind(this);
  }

  addCart({ target: { value} }) {
    const key = JSON.parse(value).title;
    localStorage.setItem(key, value);
  }

  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <h4>{title}</h4>
        <p>{`R$ ${price}`}</p>
        <img src={ thumbnail } alt={ title } />
        <button
          data-testid="product-add-to-cart"
          type="button" onClick={ this.addCart }
          value={ JSON.stringify({ title, price, thumbnail }) }>
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
