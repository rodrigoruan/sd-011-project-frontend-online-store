import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: JSON.parse(localStorage.getItem('cart')),
    };
    this.buildCard = this.buildCard.bind(this);
    this.total = this.total.bind(this);
  }

  buildCard() {
    const { cartProducts } = this.state;
    return cartProducts.map((product) => (
      <div key={ product.id } className="checkout-product-card">
        <img src={ product.thumbnail } alt="imagem" width="100px" />
        <p>{product.title}</p>
        <p>{`R$ ${product.price}` }</p>
      </div>
    ));
  }

  total() {
    const { cartProducts } = this.state;
    const price = cartProducts.map((product) => product.price);
    return price.reduce((init, current) => init + current, 0);
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        <Link to="/Cart">voltar para o carrinho</Link>
        <div className="checkout-products-list">
          <h3>Revise seus Produtos</h3>
          {this.buildCard()}
          <p>{`Total: ${this.total()}`}</p>
        </div>
        <div>
          <h3>Informações do Comprador</h3>
          <form>
            <input type="text" placeholder="Nome Completo" data-testid />
            <input type="number" placeholder="CPF" data-testid />
            <input type="text" placeholder="Email" data-testid />
            <input type="number" placeholder="Telefone" data-testid />
            <input type="number" placeholder="CEP" data-testid />
            <input type="text" placeholder="Endereço" data-testid />
            <input type="text" placeholder="Complemento" data-testid />
            <input type="number" placeholder="Número" data-testid />
            <input type="text" placeholder="Cidade" data-testid />
            <select>
              <option>Estado</option>
            </select>
          </form>

        </div>
      </div>
    );
  }
}
