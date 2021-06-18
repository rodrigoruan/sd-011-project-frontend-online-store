import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewItem extends Component {
  render() {
    const { product, cart } = this.props;
    const quantity = cart.filter((item) => item === product);
    return (
      <div>
        <div key={ product.title }>
          <p data-testid="shopping-cart-product-name">{product.title}</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>{product.price}</p>
          <span data-testid="shopping-cart-product-quantity">{quantity.length}</span>
        </div>
      </div>
    );
  }
}

NewItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default NewItem;
