import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const {
      handleAddToCart,
      productData: { id, thumbnail, title, price },
    } = this.props;

    this.setState({ id, thumbnail, title, price });
  }

  render() {
    const { title, thumbnail, price, id } = this.state;
    // prettier-ignore
    const { handleAddToCart, handleDecreaseQuantity, handleRemoveFromCart,
      productData: { quantity } } = this.props;

    return (
      <div>
        <button
          type="button"
          onClick={ () => handleRemoveFromCart(id, thumbnail, title, price, quantity) }
        >
          X
        </button>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img height="150px" src={ thumbnail } alt="thumbnail" />
        <span>{price}</span>
        <div data-testid="shopping-cart-product-quantity">{quantity}</div>

        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => handleDecreaseQuantity(id, thumbnail, title, price, quantity) }
        >
          -
        </button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => handleAddToCart(id, thumbnail, title, price, quantity) }
        >
          +
        </button>
        <hr />
      </div>
    );
  }
}

CartProduct.propTypes = {
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
}.isRequired;
