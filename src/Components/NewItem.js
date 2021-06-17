import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(operator) {
    const { quantity } = this.state;
    if (operator === 'increase') {
      this.setState((previousState) => ({
        quantity: previousState.quantity + 1,
      }));
    }
    if (operator === 'decrease' && quantity > 1) {
      this.setState((previousState) => ({
        quantity: previousState.quantity - 1,
      }));
    }
  }

  render() {
    const { newProduct } = this.props;
    const { quantity } = this.state;
    return (
      <div className="card">
        <h3 className="title" data-testid="shopping-cart-product-name">
          {newProduct.title}
        </h3>
        <img className="img" src={ newProduct.thumbnail } alt={ newProduct.title } />
        <p>
          Preço unitário:
          {newProduct.price}
        </p>

        <p>
          Preço total:
          {quantity * newProduct.price}
        </p>
        <div id="increase-decrease-buttons">
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => { this.handleClick('increase'); } }
          >
            +
          </button>
          <p data-testid="shopping-cart-product-quantity">
            {quantity}
          </p>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => { this.handleClick('decrease'); } }
          >

            -
          </button>
        </div>
      </div>
    );
  }
}

NewItem.propTypes = {
  newProduct: PropTypes.arrayOf({

  }).isRequired,
};
