import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    const { link } = this.props;
    return (
      <div className="container-cart-button">
        <Link data-testid="shopping-cart-button" to={ link }>Carrinho de compras</Link>
      </div>
    );
  }
}

CartButton.propTypes = {
  link: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.objectOf(PropTypes.array),
  }),
};

CartButton.defaultProps = {
  link: {},
};

export default CartButton;
