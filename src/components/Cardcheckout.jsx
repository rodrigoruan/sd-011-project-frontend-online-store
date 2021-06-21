import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Checkout.css';

export default class Cardcheckout extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: JSON.parse(localStorage.getItem('cart')),
    };

    this.buildCard = this.buildCard.bind(this);
  }

  buildCard() {
    const { cartProducts } = this.state;
    return cartProducts.map((product) => (
      <div key={ product.id } className="checkout-product-card">
        <img
          src={ product.thumbnail }
          alt="imagem"
          width="220px"
          className="checkout-product-img"
        />
        <Link to="/Cart" className="checkout-product-card-link">
          <p className="checkout-product-title">{product.title}</p>
        </Link>
        <p className="checkout-product-quantity">{`[Itens: ${product.quantity}]`}</p>
        <p
          className="checkout-product-price"
        >
          {`R$ ${product.price * product.quantity}` }
        </p>
      </div>
    ));
  }

  render() {
    return (
      <div className="checkout-products-list">
        <h3>Revise seus Produtos</h3>
        <div>
          {this.buildCard()}
        </div>
      </div>
    );
  }
}
