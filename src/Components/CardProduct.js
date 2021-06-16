import React, { Component } from 'react';
import PropTypes from 'prop-types';
// teste

class CardProduct extends Component {
  render() {
    const { listProduct } = this.props;
    const { thumbnail, title, price } = listProduct;
    return (
      <div data-testid="product">
        { title }
        <img src={ thumbnail } alt={ title } />
        { price }
      </div>
    );
  }
}

CardProduct.propTypes = {
  listProduct: PropTypes.shape(PropTypes.arrayOf({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
  })).isRequired,
};

export default CardProduct;
