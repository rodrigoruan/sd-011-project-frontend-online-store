import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarrinhoCompras extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }
  
  addItem(product) {
    product.cartCount += 1;
    this.forceUpdate();
  }

  removeItem(product) {
    product.cartCount -= 1;
    this.forceUpdate();
  }
  render() {
    const { cartItems } = this.props;
    const emptyCart = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    return (
      <div>
        { cartItems.length === 0 ? emptyCart : cartItems.map((item, index) => (
          <div className="cartProduct" key={ index }>
            <button onClick={() => this.addItem(item) }>+</button>
            <button onClick={() => this.removeItem(item) }>-</button>
            <p data-testid="shopping-cart-product-name">{ item.title }</p>
            <img src={ item.thumbnail } alt="produto" />
            <p>
              {'R$'}
              { (item.price * item.cartCount).toFixed(2) }
            </p>
            <p data-testid="shopping-cart-product-quantity">
              { item.cartCount }
            </p>
          </div>
        ))}
      </div>
    );
  }
}

CarrinhoCompras.propTypes = {
  cartItems: PropTypes.arrayOf(Object).isRequired,
};

export default CarrinhoCompras;
