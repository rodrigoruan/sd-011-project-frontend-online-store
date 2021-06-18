import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Cart.module.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    const { location: { product } } = this.props;
    this.state = {
      products: product,
    };
  }

  componentDidMount() {
  }

  render() {
    const { products } = this.state;
    return (
      <section className={ style.cart }>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <ul>
          { products && products.map((item, index) => (
            <li key={ index }>
              <h2 data-testid="shopping-cart-product-name">{ item.title }</h2>
              <img src={ item.thumbnail } alt="foto do produto no carro" />
              <p>
                R$
                { item.price }
              </p>
              <span data-testid="shopping-cart-product-quantity">{item.quantity}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Cart;
