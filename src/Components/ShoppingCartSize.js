import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCartSize extends Component {
  render() {
    const { shop } = this.props;
    return (
      <p
        className="cart-quantity"
        data-testid="shopping-cart-size"
      >
        { shop }
      </p>
    );
  }
}

ShoppingCartSize.propTypes = {
  shop: PropTypes.number.isRequired,
};
