import React, { Component } from 'react';

class ButtonCart extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.moreOne = this.moreOne.bind(this);
    this.lessOne = this.lessOne.bind(this);
  }

  moreOne() {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  }

  lessOne() {
    this.setState((prevState) => ({
      quantity: prevState.quantity > 1 ? prevState.quantity - 1 : 1,
    }));
  }

  render() {
    const { quantity } = this.state;
    return (
      <div data-testid="shopping-cart-product-quantity">
        <button type="button" onClick={ this.moreOne }>+</button>
        <p>{quantity}</p>
        <button type="button" onClick={ this.lessOne }>-</button>
      </div>
    );
  }
}

export default ButtonCart;
