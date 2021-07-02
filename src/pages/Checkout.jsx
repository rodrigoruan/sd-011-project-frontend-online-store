import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';
import './Checkout.css';

class Checkout extends React.Component {
  constructor() {
    super();
    const items = JSON.parse(localStorage.getItem('items'));
    const quantity = JSON.parse(localStorage.getItem('quantity'));
    this.state = {
      items,
      quantity,
    };
  }

  componentWillUnmount() {
    localStorage.clear();
  }

  render() {
    let totalPrice = 0;
    const { items, quantity } = this.state;
    return (
      <div className="checkout-page">
        <div className="main">
          <div className="home-link">
            <Link to="/"><button className="home" type="button">Home</button></Link>
          </div>
          {items === null ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          )
            : items.map(
              ({ title, thumbnail, price, id }, index) => {
                totalPrice += price * quantity[index][id];
                return (
                  <div
                    className="cart-product"
                    key={ index }
                    data-testid="shopping-cart-product-name"
                  >
                    <img src={ thumbnail } alt="Foto do Produto" />
                    <p className="cart-product-name">{title}</p>
                    <p>
                      {`Quantidade: ${quantity[index][id]}`}
                    </p>
                    <p>{`Preço: R$${price}`}</p>
                  </div>
                );
              },
            )}
        </div>
        <div className="last-step">
          <p>{`Valor total: R$${totalPrice.toFixed(2)}`}</p>
          <CheckoutForm />
        </div>
      </div>
    );
  }
}

export default Checkout;
