import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductQuantity extends Component {
  constructor(props) {
    super(props);
    const { details } = this.props;
    this.state = {
      details: details.products,
      quantity: details.quantity,

    };
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleQuantity(tag) {
    let counter;
    const { quantity } = this.state;
    if ((tag === 'remove') && (quantity > 0)) {
      counter = quantity - 1;
      this.setState({ quantity: counter });
      return;
    }
    if (tag === 'add') {
      counter = quantity + 1;
      this.setState({ quantity: counter });
    }
  }

  render() {
    const { details, quantity } = this.state;
    const { title, thumbnail, price } = details;
    return (
      <div>
        <img data-testid="product" src={ thumbnail } alt="product" />
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <h4>{ price }</h4>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          type="button"
          onClick={ () => this.handleQuantity('add') }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          onClick={ () => this.handleQuantity('remove') }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
      </div>
    );
  }
}
export default ProductQuantity;
