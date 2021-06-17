import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <img alt={ `${product.title}` } src={ product.img } />
        <h4 data-testid="shopping-cart-product-name">{ product.title }</h4>
        <p data-testid="shopping-cart-product-quantity">1</p>
        <p>{ `R$ ${parseFloat(product.price).toFixed(2)}` }</p>
      </div>
    );
  }
}

Cart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default Cart;
