import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      productsSelected: [],
    }

    this.getProductsFromStorage = this.getProductsFromStorage.bind(this);
  }

  getProductsFromStorage() {
    const productsSelected = JSON.parse(localStorage.getItem('products'));
 
    this.setState({productsSelected});
  }

  componentDidMount() {
    this.getProductsFromStorage();
  }

  render() {

    const { productsSelected } = this.state;
    const renderCart = productsSelected.map(({ title, price, quantity}) => {
      return (
        <div>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>R$ {price}</p>
          <p>
            Quantidade: <span data-testid="shopping-cart-product-quantity">{quantity}</span>
          </p>
        </div>
      );
    })
    
    return (
      <div>
        {renderCart}
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
