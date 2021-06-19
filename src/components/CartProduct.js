import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.setItemObj();
  }

  setItemObj = () => {
    const { productData } = this.props;
    this.setState(productData);
  };

  render() {
    const { productData } = this.props;
    // prettier-ignore
    const { handleAddToCart, handleDecreaseQuantity, handleRemoveFromCart } = this.props;

    const showButtons = () => {
      if (handleAddToCart && handleDecreaseQuantity && handleRemoveFromCart) {
        return (
          <div>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ () => handleDecreaseQuantity(productData) }
            >
              -
            </button>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ () => handleAddToCart(productData) }
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
          <button type="button" onClick={ () => handleRemoveFromCart(productData) }>
            X
          </button>
        );
      }
    };

    return (
      <div>
        {showRemoveButton()}
        <p data-testid="shopping-cart-product-name">{productData.title}</p>
        <img height="150px" src={ productData.thumbnail } alt="thumbnail" />
        <span>{productData.price}</span>
        <div data-testid="shopping-cart-product-quantity">{productData.quantity}</div>
        {showButtons()}
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
