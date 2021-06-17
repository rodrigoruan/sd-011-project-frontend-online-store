import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductQuantity from './ProductQuantity';

export default class ProductItem extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  increaseQuantity() {
    let { quantity } = this.state;
    quantity += 1;
    this.setState({ quantity });
  }

  decreaseQuantity() {
    let { quantity } = this.state;
    if (quantity > 1) {
      quantity -= 1;
      this.setState({ quantity });
    }
  }

  render() {
    const { cart, deleteItem } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <div className="cart-item" key={ cart.id }>
          <button type="button" id={ cart.id } onClick={ deleteItem }>delete</button>
          <span>image</span>
          <h3 data-testid="shopping-cart-product-name">{ cart.title }</h3>
          <ProductQuantity
            increaseQuantity={ this.increaseQuantity }
            decreaseQuantity={ this.decreaseQuantity }
            quantity={ quantity }
          />
          <span>{cart.price}</span>
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  deleteItem: PropTypes.func,
}.isRequired;
