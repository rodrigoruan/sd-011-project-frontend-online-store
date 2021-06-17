import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <h5>{title}</h5>
        <p>{`R$ ${price}`}</p>
        <div>
          <img src={ thumbnail } alt={ title } width="70px" />
        </div>
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
