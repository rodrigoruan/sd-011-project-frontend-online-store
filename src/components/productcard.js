import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.handleAddCart = this.handleAddCart.bind(this);
  }

  handleAddCart() {
    const { quantity } = this.state;
    const { id, title, thumbnail, price } = this.props;
    window.localStorage
      .setItem(id, [title, '/n', thumbnail, '/n', price, '/n', quantity]);
    console.log(this.props);
  }

  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3>{title}</h3>
        <p>{`R$ ${price}`}</p>
        <button
          onClick={ this.handleAddCart }
          type="button"
          data-testid="product-add-to-cart"
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;
