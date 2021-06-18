import React, { Component } from 'react'

export default class CartButton extends Component {
  constructor(props) {
    super(props);
    // Como cada CartButton vai ser gerado para cada ProductCard
    // é preciso setar o state em outro componente!!
    this.state = {
      products: [],
    };

  }

  // componentDidUpdate() {
  //   console.log(this.state)
  // }

  render() {
    return (
      <button onClick={this.addToCart}>Adicionar ao Carrinho</button>
    )
  }
}
