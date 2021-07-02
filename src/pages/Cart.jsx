import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm';
import { addToCart, decreaseOfCart, resetCart } from '../actions';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      pay: false,
    };

    this.totalPrice = this.totalPrice.bind(this);
  }

  totalPrice() {
    const { cartList } = this.props;

    return cartList.reduce((total, { price, quantity }) => (
      total + (price * quantity)
    ), 0).toFixed(2);
  }

  elementList(value) {
    const { id, title, price, thumbnail, inStorage, quantity } = value;
    const { add, decrease } = this.props;
    return (
      <li key={ id }>
        <button
          data-testid=""
          type="button"
          name={ title }
          onClick={ this.removeItem }
        >
          Remover
        </button>
        <img alt="Foto produto" src={ thumbnail } />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          name={ id }
          onClick={
            quantity === 1
              ? (event) => this.removeItem(event) // funciona porem precisa da função com redux para funcionar ;P
              : () => decrease(value)
          }
        >
          decrementar
        </button>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          name={ id }
          disabled={ inStorage <= quantity }
          onClick={ () => add(value) }
        >
          Incrementar
        </button>
        <p>{price.toFixed(2)}</p>
      </li>
    );
  }

  render() {
    const { pay } = this.state;
    const { cartList, reset } = this.props;
    if (cartList.length === 0) {
      return (
        <div>
          <Link to="/">Voltar</Link>
          <h3 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h3>
        </div>
      );
    }

    if (pay) {
      return (
        <div>
          <Link to="/">Voltar</Link>
          {cartList.map(
            (cartItem) => (
              this.elementList(cartItem)
            ),
          )}
          {`Valor total da compra: R$${this.totalPrice()}`}
          <PaymentForm />
        </div>
      );
    }

    return (
      <div>
        <Link to="/">Voltar</Link>
        <button type="button" onClick={ () => reset() }>Limpar carrinho</button>
        {cartList.map(
          (cartItem) => (
            this.elementList(cartItem)
          ),
        )}
        {`Valor total da compra: R$${this.totalPrice()}`}

        <button
          type="button"
          data-testid="checkout-products"
          onClick={ () => this.setState({ pay: true }) }
        >
          finalizar compras
        </button>
      </div>
    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.shape.isRequired,
  add: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cartList: state.cartReducer.cartList,
});

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addToCart(value)),
  decrease: (value) => dispatch(decreaseOfCart(value)),
  reset: (value) => dispatch(resetCart(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
