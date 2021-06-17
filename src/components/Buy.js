import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Buy extends Component {
  render() {
    const arrayObject = JSON.parse(localStorage.getItem('item'));
    return (
      <div>
        <h1>Checkout</h1>
        <div>
          {!localStorage.item ? (
            <div data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </div>
          ) : (
            arrayObject.map(({ id, title, thumbnail, price, countProduct }, index) => (
              <div key={ index } data-testid="shopping-cart-product-name">
                <h2>{`${title}-${price}`}</h2>
                <img src={ thumbnail } alt={ title } />
                <div data-testid="shopping-cart-product-quantity">{countProduct}</div>
                <div>{`${countProduct * price}`}</div>
                <Link to="/ShoppingCart">
                  <button
                    data-testid="product-increase-quantity"
                    type="button"
                    onClick={ () => this.handleIncrease(index) }
                  >
                    ➕
                  </button>
                </Link>
                <Link to="/ShoppingCart">
                  <button
                    data-testid="product-decrease-quantity"
                    type="button"
                    onClick={ () => this.handleDecrease(index, id) }
                  >
                    ➖
                  </button>
                </Link>
              </div>
            ))
          )}
        </div>
        <form>
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome Completo"
          />
          <input
            data-testid="checkout-email"
            type="email"
            placeholder="E-mail"
          />
          <input
            data-testid="checkout-cpf"
            type="string"
            placeholder="CPF"
          />
          <input
            data-testid="checkout-phone"
            type="string"
            placeholder="Telefone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <input
            data-testid="checkout-cep"
            type="string"
            placeholder="CEP"
          />
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Digite o endereço"
          />
        </form>
        <Link to="/ShoppingCart">
          Voltar
        </Link>
      </div>
    );
  }
}
