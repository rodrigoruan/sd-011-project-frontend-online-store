import React, { Component } from 'react';
import './shoppingCart.css';

class ShoppingCart extends Component {
  constructor() {
    super();

    const shoppingCartItens = JSON.parse(localStorage.getItem('shoppingCart'));

    this.state = {
      shoppingCartItens,
    };

    this.handleClickIncrease = this.handleClickIncrease.bind(this);
    this.handleClickDecrease = this.handleClickDecrease.bind(this);
  }

  getShoppingCartPrice() {
    const { shoppingCartItens } = this.state;

    return shoppingCartItens.reduce((acc, item) => acc + (item.productInfo[0].price * item.quantity), 0);
  }

  handleClickIncrease(item) {
    const { shoppingCartItens } = this.state;

    shoppingCartItens.find((productItem) => productItem.productId === item.productId).quantity += 1;
  
    this.setState({
      shoppingCartItens,
    })
  }

  handleClickDecrease(item) {
    const { shoppingCartItens } = this.state;

    shoppingCartItens.find((productItem) => productItem.productId === item.productId).quantity -= 1;
  
    this.setState({
      shoppingCartItens,
    })
  }

  render() {
    const { shoppingCartItens } = this.state;
    const totalPrice = this.getShoppingCartPrice();

    if (!shoppingCartItens) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }

    return (
      <div>
        {shoppingCartItens.map((item) => (
          <div key={item.productId} className="cart-item">
            <button> X </button>
            <img src={item.productInfo[0].thumbnail} alt={item.productInfo[0].title} />
            <h4 data-testid="shopping-cart-product-name">{item.productInfo[0].title}</h4>
            <button data-testid="product-decrease-quantity" onClick={ () => this.handleClickDecrease(item) } > - </button>
            <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
            <button data-testid="product-increase-quantity" onClick={ () => this.handleClickIncrease(item) }> + </button>
            <p>{`R$: ${item.productInfo[0].price}`}</p>
          </div>
        ))}

        <p>
          Valor Total da Compra:
          <span>{` R$ ${totalPrice}`}</span>
        </p>
      </div>
    );
  }
}

export default ShoppingCart;
