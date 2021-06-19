import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {

  render() {
    localStorage.setItem('teste', JSON.stringify(teste))
    var user = JSON.parse(localStorage.getItem('teste'));
    const { location: { productsFromList, productFromDetails } } = this.props;
    console.log(productsFromList);
    console.log(productFromDetails);
    return (
      <div>
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h3>
        <Link to="/">Voltar à Home</Link>
      </div>
    );
  }
}

export default ShoppingCart; //
