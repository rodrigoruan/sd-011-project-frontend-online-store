import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  render() {
    const { location: { state: { title, thumbnail, price } } } = this.props;

    return (
      <div>
        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
        <h4 data-testid="product-detail-name">{title}</h4>
        <img src={ thumbnail } alt={ title } />
        <span>
          R$
          { price }
        </span>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: {
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.string,
    },
  }).isRequired,
};
