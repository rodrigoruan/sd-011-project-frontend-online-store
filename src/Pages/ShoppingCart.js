import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const productFromDetails = JSON.parse(localStorage.getItem('productInfo'));
    if (productFromDetails === null) {
      return (
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h3>);
    }
    const { title, thumbnail, price } = productFromDetails;
    return (
      <div>
        <div data-testid="product" className="product">
          <h3 data-testid="shopping-cart-product-name">{ title }</h3>
          <img className="product-img" width="100px" src={ thumbnail } alt={ title } />
          <p className="price">
            Preço: R$
            { price }
          </p>
          <p data-testid="shopping-cart-product-quantity">
            1
          </p>
        </div>
        <Link to="/">Voltar à Home</Link>
      </div>
    );
  }
}

export default ShoppingCart; //
