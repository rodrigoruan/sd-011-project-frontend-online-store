import React, { Component } from 'react';

export default class CartOptions extends Component {
  constructor() {
    super();

    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this); 
  }
  
  IncrementItem() {
    const { quantity } = this.props;
    console.log(quantity)
  }

  DecreaseItem() {
    const { quantity } = this.props;
    if(quantity > 0) {
      // quantity: quantity - 1
    }
  }
  
  render() {
    const { quantity } = this.props;
    return (
      <div>
        <button onClick={ this.IncrementItem } data-testid="product-increase-quantity">+</button>
        <button onClick={ this.DecreaseItem } data-testid="product-decrease-quantity">-</button>
        <span>{ quantity }</span>
      </div>
    )
  }
}
