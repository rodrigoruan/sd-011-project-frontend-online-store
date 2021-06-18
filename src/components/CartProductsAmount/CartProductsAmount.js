import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProductsAmount extends Component {
  render() {
    const { shopCart } = this.props;
    return (
      <div>
        <span data-testid="shopping-cart-size">
          {shopCart.length
            ? shopCart
              .map(({ amount }) => amount)
              .reduce(
                (totalAmount, amountOfProduct) => totalAmount + amountOfProduct,
              )
            : 0}
        </span>
      </div>
    );
  }
}

CartProductsAmount.propTypes = {
  handleAddToShopCart: PropTypes.func,
  shopCart: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
}.isRequired;
