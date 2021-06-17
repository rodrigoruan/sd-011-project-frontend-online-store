import React, { Component } from 'react';

class AddCarrinho extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };

    this.sendToCart = this.sendToCart.bind(this);
  }

  sendToCart() {
    let arrProducts = [];
    const storageData = JSON.parse(localStorage.getItem('products'));
    const { title, price } = this.props;
    const { quantity } = this.state;
    const product = { 
      title,
      price,
      quantity,
    };

    this.setState((oldState) => ({
      quantity: oldState.quantity + 1,
    }));

    if (storageData !== null) {
      const productAux = storageData.find((produto) => produto.title === product.title);
      const productIndex = storageData.indexOf(productAux);

      if(productAux !== undefined) {
        storageData[productIndex].quantity = product.quantity;
        arrProducts = arrProducts.concat(storageData);
      } else {
        arrProducts.push(product);
        arrProducts = arrProducts.concat(storageData);
      }
      
      localStorage.setItem('products', JSON.stringify(arrProducts));
    } else {
      localStorage.setItem('products', JSON.stringify([product]));
    }
  }

  render() {
    return (
      <button
        data-testid="product-add-to-cart"
        type="button"
        onClick={this.sendToCart}
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

export default AddCarrinho;
