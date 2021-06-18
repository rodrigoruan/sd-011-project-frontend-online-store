import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartCard extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      money: 0,
    };
    this.addQuantities = this.addQuantities.bind(this);
    this.subtractQuantities = this.subtractQuantities.bind(this);
    this.removeItem = this.removeItem.bind(this);
       this.removeItem = this.removeItem.bind(this);
  }

  addQuantities() {
let localGet = localStorage.getItem(this.props.id)
      const productMoney = JSON.parse(localGet).price
let productquantities = JSON.parse(localGet).quantity

      console.log(productMoney)
    if (productquantities >= 0) {
      let quantity = productquantities += 1

  const price = this.props.price * productquantities
  const { id, title, thumbnail } = this.props;
    const obj = {
      id,
      title,
      price,
      thumbnail,
      quantity,
    };
    window.localStorage
      .setItem(id, JSON.stringify(obj));
this.state.quantity = productquantities 
      this.setState({ quantity: this.state.quantity + 1 });
        } 
  }

  subtractQuantities() {
    const quantityState = this.state.quantity
    let localGet = localStorage.getItem(this.props.id)
   const productMoney = JSON.parse(localGet).price
let productquantities = JSON.parse(localGet).quantity
    console.log(productMoney)
  if (productquantities > 1) {
    let quantity = productquantities -= 1
const price = this.props.price * productquantities
const { id, title, thumbnail } = this.props;
  const obj = {
    id,
    title,
    price,
    thumbnail,
    quantity,
  };
  window.localStorage
    .setItem(id, JSON.stringify(obj));
    this.state.quantity = productquantities 
    this.setState({ quantity: this.state.quantity - 1 });
      }else{
        this.removeItem()
      }
}
          
  removeItem(){
      const itemId = this.props.id
      localStorage.removeItem(itemId)
    window.location.reload()
  }

valueMap(){}


  render() {
    let localGet = localStorage.getItem(this.props.id)
    const productMoney = JSON.parse(localGet).price
    const productquantities = JSON.parse(localGet).quantity
    this.state.quantity = productquantities 
    this.state.money = productMoney
    return (
      <div>
          <p id='name' data-testid="shopping-cart-product-name">{ this.props.title }</p>
        <img src={ this.props.thumbnail } alt={ this.props.thumbnail } />
      
        <button data-testid="product-decrease-quantity" onClick={ this.subtractQuantities }>-</button>
        <span data-testid="shopping-cart-product-quantity">
          {this.state.quantity}</span>
        <button data-testid="product-increase-quantity" onClick={ this.addQuantities}>+</button>
       <span id="number">R${this.state.money}</span> 
        <button onClick={ this.removeItem}>X</button>
        <button>Finalizar compra</button>
      </div>
    );
  }
}
