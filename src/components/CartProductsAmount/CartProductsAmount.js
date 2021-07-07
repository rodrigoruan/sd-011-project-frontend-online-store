import React, { Component } from "react";
import PropTypes from "prop-types";

import "./CartProductsAmount.css";

export default class CartProductsAmount extends Component {
  render() {
    const { shopCart } = this.props;
    return (
      <span data-testid="shopping-cart-size">
        {shopCart.length
          ? shopCart
              .map(({ amount }) => amount)
              .reduce(
                (totalAmount, amountOfProduct) => totalAmount + amountOfProduct
              )
          : 0}
      </span>
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
    })
  ),
}.isRequired;
