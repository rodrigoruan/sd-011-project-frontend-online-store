import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

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
      <div>
        {items === null ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )
          : items.map(
            ({ title, thumbnail, price, id }, index) => {
              totalPrice += price * quantity[index][id];
              return (
                <div key={ index } data-testid="shopping-cart-product-name">
                  <img src={ thumbnail } alt="Foto do Produto" />
                  <p>{title}</p>
                  <p>
                    {`Quantidade: ${quantity[index][id]}`}
                  </p>
                  <p>{`Preço: R$${price}`}</p>
                </div>
              );
            },
          )}
        <p>{`Valor total: R$${totalPrice.toFixed(2)}`}</p>
        <CheckoutForm />
      </div>
    );
  }
}

export default Checkout;
