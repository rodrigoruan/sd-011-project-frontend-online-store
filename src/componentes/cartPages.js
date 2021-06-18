import React, { Component } from 'react';
// import ProductCart from './ProductCart';

class CartPages extends Component {
  constructor(props) {
    super(props);
    const productsListLocal = JSON.parse(localStorage.getItem('carrinho'));
    this.state = {
      productsList: productsListLocal,
    };
    console.log(this.state);
  }

  render() {
    const { productsList } = this.state;
    console.log(productsList);
    return (
      <div>
        {!productsList
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : productsList.map((item) => (
            <div key={ item.products.id }>
              <img data-testid="product" src={ item.products.thumbnail } alt="product" />
              <h3 data-testid="shopping-cart-product-name">{ item.products.title }</h3>
              <h4>{ item.products.price }</h4>
              <p data-testid="shopping-cart-product-quantity">{ item.quantity }</p>
            </div>
          ))}

      </div>
    );
  }
}

export default CartPages;
