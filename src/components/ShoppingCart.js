import React, { Component } from 'react';
import { results } from '../__mocks__/query';
import closeButton from '../images/close-button.png';
const some = {
  'MLB918281211': 1,
  'MLB923744806': 1,
};

export default class ShoppingCart extends Component {
  constructor() {
    super();
    localStorage.setItem('shoppingCart', JSON.stringify(results));
    localStorage.setItem('quantity', JSON.stringify(some));
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const quantity = JSON.parse(localStorage.getItem('quantity'));
    this.state = {
      shoppingCart,
      quantity,
    };
  }

  // componentDidMount() {
  //   const objeto = Object.assign({}, this.state.shoppingCart[0]);
  //   const shoppingCart = localStorage.getItem('shoppingCart');
  //   localStorage.setItem('shoppingCart', JSON.stringify([...shoppingCart, objeto]))
  //   console.log(objeto)
  //   this.setState({
  //     shoppingCart: JSON.parse(localStorage.getItem('shoppingCart')),
  //   });
  // }

  render() {
    const { shoppingCart } = this.state;
    return (
      <div>
        { shoppingCart.map(({ title, thumbnail, price }, index) => (
          <div key={ index }>
            <img src={ closeButton } alt="close button" />
            <img src={ thumbnail } alt="Foto do Produto" />
            <p>{title}</p>
            <button type="button" data-testid="product-decrease-quantity">
              -
            </button>
            <p>{ `Quantidade: ${1}` }</p>
            <button type="button" data-testid="product-increase-quantity">
              +
            </button>
            <p>{`Preço: R$${price}`}</p>
            <p>{ `Valor total: R$${price}` }</p>
          </div>
        )) }
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}
