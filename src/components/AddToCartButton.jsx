import React, { Component } from 'react';

class AddToCartButton extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };
  }

  getProductFromLocalStorage() {
    JSON.parse(localStorage.getItem('cart'));
  }

  saveToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  async addToCart(id) {
    const { productsList: { results } } = this.state;
    console.log(results);
    const itemToAdd = results.find((product) => product.id === id);
    localStorage.setItem('cart', itemToAdd);
    this.setState({
      cart: [...cart, itemToAdd],
    });
    this.saveToLocalStorage(cart);
  }

  render() {
    return (
      <button
        type="button"
        onClick={ this.addToCart }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

export default AddToCartButton;
