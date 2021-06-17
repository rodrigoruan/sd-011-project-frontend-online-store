import React, { Component } from 'react'

export default class CartItem extends Component {
  constructor(){
    super();
    this.state = {
      stock: 99,
      quantity: 1,
    };
    this.handleFluctuation = this.handleFluctuation.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    const { removeItemFromCart, product } = this.props
    const { id } = product;
    removeItemFromCart(id);
  }

  componentDidMount() {
    const { quantity } = this.props.product;
    this.setState({
      quantity,
    });
  }

  handleFluctuation({ target }) {
    if(target.innerText === '+') {
      this.setState((currentState) => ({
        quantity: currentState.quantity + 1,
      }));
    } else {
      this.setState((currentState) => ({
        quantity: currentState.quantity > 1 ? currentState.quantity - 1 : currentState.quantity,
      }));
    }
  }

  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;
    const { quantity } = this.state;
    return (
        <li className="cart-item-container">
          <button type="button" onClick={ this.removeItem }>X</button>
        <picture>
          <img src={ thumbnail } alt={ title } />
        </picture>
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <div className="quantity-switch">
          <button data-testid="product-increase-quantity" type="button" onClick={this.handleFluctuation}>+</button>
          <p data-testid="shopping-cart-product-quantity">{ quantity }</p> 
          <button data-testid="product-decrease-quantity" type="button" onClick={this.handleFluctuation}>-</button>
        </div>
        <h2>{`R$ ${(price * quantity).toFixed(2)}`}</h2>
      </li>
    )
  }
}
