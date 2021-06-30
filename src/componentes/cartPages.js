import React, { Component } from 'react';
import ProductQuantity from './ProductQuantity';
// import ProductCart from './ProductCart';

class CartPages extends Component {
  constructor(props) {
    super(props);
    const productsListLocal = JSON.parse(localStorage.getItem('carrinho'));
    this.state = {
      productsList: productsListLocal,
    };
  }

  render() {
    const { productsList } = this.state;
    return (
      <div>
        {!productsList
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : productsList.map((item) => (
            <div key={ item.products.id }>
              <ProductQuantity details={ item } />
            </div>
          ))}

      </div>
    );
  }
}

export default CartPages;
