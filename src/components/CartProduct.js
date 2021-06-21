import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCart } from '../services/storage';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.setItemObj();
  }

  setItemObj = () => {
    const { cartItem } = this.props;
    this.setState(cartItem);
  };

  CheckAvailability = () => {
    const { cartItem } = this.props;
    const alreadyInTheCart = getCart().find((el) => el.id === cartItem.id);
    const { available_quantity, quantity } = cartItem;
    if (alreadyInTheCart.quantity >= available_quantity) {
      return true;
    }
    return false;
  };

  render() {
    const { cartItem, handleAddToCart, handleDecreaseQuantity, handleRemoveFromCart } = this.props;
    // prettier-ignore

    const showButtons = () => {
      if (handleAddToCart && handleDecreaseQuantity && handleRemoveFromCart) {
        return (
          <div>
            {this.CheckAvailability()}
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={() => handleDecreaseQuantity(cartItem)}
            >
              -
            </button>
            <button
            disabled={this.CheckAvailability()}
              data-testid="product-increase-quantity"
              type="button"
              onClick={() => handleAddToCart(cartItem)}
            >
              +
            </button>
            <hr />
          </div>
        );
      }
    };
    const showRemoveButton = () => {
      if (handleRemoveFromCart) {
        return (
          <button type="button" onClick={() => handleRemoveFromCart(cartItem)}>
            X
          </button>
        );
      }
    };

    return (
      <div>
        {showRemoveButton()}
        <p data-testid="shopping-cart-product-name">{cartItem.title}</p>
        <img height="150px" src={cartItem.thumbnail} alt="thumbnail" />
        <span>{cartItem.price}</span>
        <div data-testid="shopping-cart-product-quantity">{cartItem.quantity}</div>
        {showButtons()}
      </div>
    );
  }
}

CartProduct.propTypes = {
  cartItem: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}.isRequired;
