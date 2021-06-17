import React, { Component } from 'react'
import './ShoppingCartItem.css';

export default class ShoppingCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.item.id,
      title: props.item.title,
      thumbnail: props.item.thumbnail,
      quantity: props.item.quantity,
      price: props.item.price,
      totalPrice: props.item.price
    }

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
  }

  handleIncrease() {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1,
    }, () => {
      this.totalPrice();
    });
  }

  handleDecrease() {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity - 1,
    }, () => {
      this.totalPrice();
    });
  }

  totalPrice() {
    const { quantity, price } = this.state;
    const newTotalPrice = quantity * price;
    this.setState({
      totalPrice: newTotalPrice,
    })
  }

  render() {
    const { title, thumbnail, quantity, totalPrice } = this.state; 
    return (
      <div className="shopping-cart-item-section">
        <button type="button" className="erase-product">X</button>
        <img src={ thumbnail} alt={ title } />
        <span>{ title }</span>
        <button type="button" onClick={ this.handleDecrease } data-testid="product-decrease-quantity">-</button>
        <p>{ quantity }</p>
        <button type="button" onClick={ this.handleIncrease } data-testid="product-increase-quantity">+</button>
        <p>R$ { totalPrice }</p>
      </div>
    )
  }
}
