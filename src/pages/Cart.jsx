import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm';
import { addToCart, decreaseOfCart, resetCart, removeItem } from '../actions';
import 'bulma/css/bulma.min.css';
import '../styles/Cart.css';

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
    const { add, decrease, remove } = this.props;
    return (
      <div className="cart-item" key={ id }>
        <div className="size-15">
          <button
            className="button is-danger is-small"
            type="button"
            name={ id }
            onClick={ () => remove(value) }
          >
            Remover
          </button>
          <div className="img-container">
            <img alt="Foto produto" src={ thumbnail } />
          </div>
        </div>
        <div className="size-60">
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>{`R$ ${price.toFixed(2)}`}</p>
        </div>
        <div className="size-15">
          <button
            className="button is-small"
            data-testid="product-decrease-quantity"
            type="button"
            name={ id }
            onClick={
              quantity === 1
                ? () => remove(value)
                : () => decrease(value)
            }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{quantity}</p>
          <button
            className="button is-small"
            data-testid="product-increase-quantity"
            type="button"
            name={ id }
            disabled={ inStorage <= quantity }
            onClick={ () => add(value) }
          >
            +
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { pay } = this.state;
    const { cartList, reset } = this.props;
    const cartTitle = 'Carrinho de compras';
    if (cartList.length === 0) {
      return (
        <div className="cart-page">
          <Link className="button is-link" to="/">Voltar</Link>
          <h1 className="is-size-3 cart-title empty-title">{cartTitle}</h1>
          <img
            src="https://www.aquecedoresmorumbisul.com.br/image/catalog/pages/empty-cart-icon.png"
            alt="Carrinho vazio :("
            className="empty-cart-img"
          />
          <h3 className="center is-size-4" data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h3>
        </div>
      );
    }

    if (pay) {
      return (
        <div className="cart-page box">
          <Link className="button is-link" to="/">Voltar</Link>
          <div className="title-price-wrapper">
            <h1 className="is-size-3 cart-title">{cartTitle}</h1>
            <p className="is-size-4 cart-title">
              {`Preço total: R$${this.totalPrice()}`}
            </p>
          </div>
          {cartList.map(
            (cartItem) => (
              this.elementList(cartItem)
            ),
          )}
          <PaymentForm />
        </div>
      );
    }

    return (
      <div className="cart-page box">
        <div>
          <Link className="button is-link margin-btn" to="/">Voltar</Link>
          <button
            className="button is-danger margin-btn"
            type="button"
            onClick={ () => reset() }
          >
            Limpar carrinho
          </button>
        </div>
        <div className="title-price-wrapper">
          <h1 className="is-size-3 cart-title">{cartTitle}</h1>
          <p className="is-size-4 cart-title">{`Preço total: R$${this.totalPrice()}`}</p>
        </div>
        {cartList.map(
          (cartItem) => (
            this.elementList(cartItem)
          ),
        )}

        <button
          className="buy-btn button is-primary is-large"
          type="button"
          data-testid="checkout-products"
          onClick={ () => this.setState({ pay: true }) }
        >
          Finalizar Compra
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
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cartList: state.cartReducer.cartList,
});

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addToCart(value)),
  decrease: (value) => dispatch(decreaseOfCart(value)),
  reset: (value) => dispatch(resetCart(value)),
  remove: (value) => dispatch(removeItem(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
