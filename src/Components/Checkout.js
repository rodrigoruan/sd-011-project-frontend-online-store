import React, { Component } from 'react';
import style from './Checkout.module.css';

export class Checkout extends Component {
  render() {
    const states = ['Estado', 'Acre', 'Alagoas',
      'Amapá', 'Amazonas', 'Bahia', 'Ceará',
      'Distrito Federal', 'Espírito Santo', 'Goías', 'Maranhão',
      'Mato Grosso', 'Mato Grosso do Sul',
      'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco',
      'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
      'Rio Grande do Sul', 'Rondônia', 'Roraíma',
      'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
    const shoppingCart = JSON.parse(localStorage.getItem('cart'));
    return (
      <section className={ `${style.container} animeLeft` }>
        <div className={ style.products }>
          {shoppingCart && shoppingCart.map((item, index) => (
            <div key={ index }>
              <h2 data-testid="shopping-cart-product-name">{ item.title }</h2>
              <img src={ item.thumbnail } alt="foto do produto no carro" />
              <p>
                R$
                { item.price }
              </p>
              <span data-testid="shopping-cart-product-quantity">{item.quantity}</span>
            </div>
          ))}
        </div>
        <h2>
          Total:
          R$
          {shoppingCart.reduce((acc, cv) => acc + (cv.price * cv.quantity), 0).toFixed(2)}
        </h2>
        <form>
          <input
            type="text"
            placeholder="Nome completo"
            data-testid="checkout-fullname"
            required
          />
          <input
            type="email"
            placeholder="Email"
            data-testid="checkout-email"
            required
          />
          <input
            type="text"
            placeholder="Telefone"
            data-testid="checkout-phone"
            required
          />
          <input
            type="text"
            placeholder="CPF"
            data-testid="checkout-cpf"
            required
          />
          <input
            type="text"
            placeholder="CEP"
            data-testid="checkout-cep"
            required
          />
          <input
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
            required
          />
          <input
            type="text"
            placeholder="Complemento"
            required
          />
          <input
            type="number"
            placeholder="Número"
            required
          />
          <input
            type="text"
            placeholder="Cidade"
            required
          />
          <select required>
            {states.map((state) => <option key={ state }>{ state }</option>)}
          </select>
        </form>
      </section>
    );
  }
}
export default Checkout;
