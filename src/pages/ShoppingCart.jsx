import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { cart, quantity } = this.props;
    const emptyCart = (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>);

    return !cart.length ? emptyCart : cart.map((product) => (
      <div key={ product.title }>
        <p data-testid="shopping-cart-product-name">{product.title}</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{product.price}</p>
        <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
      </div>
    ));
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.shape({
    map: PropTypes.func.isRequired,
    length: PropTypes.arrayOf().isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ShoppingCart;
