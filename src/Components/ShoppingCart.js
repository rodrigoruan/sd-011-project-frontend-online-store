import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  // constructor() {
  //   super();

  // }

  // componentDidMount() {
  //   // const renderProduct = localStorage.getItem(getProduct[0]);
  //   console.log(items);
  // }

  render() {
    const cartItems = { ...localStorage };
    console.log(cartItems);
    const renderCartObjects = Object.values(cartItems).map((element) => (
      <div key={ element.split(',/n')[0] }>
        <h3 data-testid="shopping-cart-product-name">{ element.split(',/n')[0] }</h3>
        <img src={ element.split(',/n')[1].replace(',', '') } alt={ element } />
        <p data-testid="shopping-cart-product-quantity">
          { element.split(',/n')[3].replace(',', '') }
        </p>
      </div>
    ));
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        <div>{ renderCartObjects }</div>
        {/* adiciona requisito 12 abaixo ---- */}
        <Link to={ { pathname: '/checkout' } }>
          <button
            data-testid="checkout-products"
            type="button"
          >
            Comprar
          </button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
