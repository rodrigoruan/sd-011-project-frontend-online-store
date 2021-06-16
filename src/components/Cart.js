import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  render() {
    const { addCart } = this.props;
    const { title, price } = addCart;
    console.log(addCart);
    const mensagem = (<p data-testid="shopping-cart-empty-message">
      Seu carrinho está vazio
    </p>);
    return (
      <div>
        <Link to="/">Main</Link>
        <ul>
          
        </ul>
      </div>
    );
  }
}

export default Cart;
