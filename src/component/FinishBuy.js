import React, { Component } from 'react'

export default class FinishBuy extends Component {
  constructor() {
    super();

    this.state = {
      price: 0,
    }

    this.TotalPrice = this.TotalPrice.bind(this);
  }

  TotalPrice() {
    console.log('RICOOOOOOO')
  }
  
  render() {
    return (
      <div>
        <button>Finalizar compra</button>
      </div>
    )
  }
}
