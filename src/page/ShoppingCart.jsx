import React, { Component } from 'react';
import CartItem from '../components/CartItem';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartIsEmpty: false,
      produtos: [],
    };
    this.cartIsEmpty = this.cartIsEmpty.bind(this);
    this.recuperaLocalStorage = this.recuperaLocalStorage.bind(this);
    this.removeFromProducts = this.removeFromProducts.bind(this);
  }

  componentDidMount() {
    this.recuperaLocalStorage();
    if (localStorage.length === 0) {
      this.cartIsEmpty(true);
    }
  }

  cartIsEmpty(bool) {
    this.setState({ cartIsEmpty: bool });
  }

  recuperaLocalStorage() {
    const { produtos } = this.state;

    const productsObjectsOnLocalStorage = Object.keys(localStorage);
    for (let index = 0; index < productsObjectsOnLocalStorage.length; index += 1) {
      const novoProduto = {
        produto: JSON.parse(productsObjectsOnLocalStorage[index]),
        quantidade: parseInt(localStorage
          .getItem(productsObjectsOnLocalStorage[index]), 10),
      };

      produtos.push(novoProduto);
      this.cartIsEmpty(false);
    }
    this.setState({
      produtos,
    });
  }

  removeFromProducts(productToRemove) {
    const { produtos } = this.state;
    const newArray = [];
    produtos.map((produto) => {
      if (produto !== productToRemove) newArray.push(produto);
      return produto;
    });
    this.setState({ produtos: newArray });
  }

  render() {
    const { produtos, cartIsEmpty } = this.state;

    if (localStorage.length === 0 || cartIsEmpty) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }

    return (
      <div>
        <div
          data-testid="shopping-cart-empty-message"
        >
          {produtos.map((produto, index) => (<CartItem
            key={ index }
            item={ produto }
            removeFromProducts={ this.removeFromProducts }
          />))}
        </div>
      </div>
    );
  }
}
