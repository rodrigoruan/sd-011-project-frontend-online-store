import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCartBtn extends React.Component {
  render() {
    const { shoppingCartItens } = this.props;

    return (
      <Link
        data-testid="shopping-cart-button"
        to="/shoppingcart"
      >
        <img
          src="/imgs/shopping-cart.png"
          alt="Shopping-cart-button"
          width="25px"
        />
        <span data-testid="shopping-cart-size">
          { shoppingCartItens }
        </span>
      </Link>
    );
  }
}

ShoppingCartBtn.propTypes = {
  shoppingCartItens: PropTypes.number.isRequired,
};

export default ShoppingCartBtn;
