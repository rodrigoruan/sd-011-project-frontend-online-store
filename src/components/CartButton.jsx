import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  constructor() {
    super();

    this.state = {
      quantityTotalInitial: 0,
    };
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  componentDidMount() {
    this.updateQuantity();
  }

  updateQuantity() {
    const qttTotalStorage = parseInt(localStorage.getItem('quantidade'), 10);
    this.setState({
      quantityTotalInitial: qttTotalStorage,
    });
  }

  render() {
    const { quantityTotalInitial } = this.state;
    const { quantityTotal } = this.props;

    return (
      <div>
        <Link
          to="/shoppingCart"
          alt="shopping-cart"
          data-testid="shopping-cart-button"
        >
          carrinho
        </Link>
        <span data-testid="shopping-cart-size">
          { quantityTotalInitial > quantityTotal ? quantityTotalInitial : quantityTotal }
        </span>
      </div>);
  }
}

export default CartButton;

CartButton.propTypes = {
  quantityTotal: PropTypes.number.isRequired,
};
