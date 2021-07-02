import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm';
import { addToCart, decreaseOfCart, resetCart } from '../actions';

class Cart extends Component {
  constructor(props) {
    super(props);
    const { cartList } = this.props;
    // const disabled = {};
    this.state = {
      cartList,
      pay: false,
      // disabled,
    };

    this.addItem = this.addItem.bind(this);
    this.decreasesItem = this.decreasesItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
  }

  componentDidUpdate() {
    const { cartList } = this.state;
    Object.values(cartList).forEach((listItem) => {
      const value = JSON.stringify(listItem);
      sessionStorage.setItem(listItem.id, value);
    });
  }

  addItem({ target: { name } }) {
    const { cartList } = this.state;
    const cart = { ...cartList };
    const item = { ...cart[name] };
    // const disabled = (item.quantity + 1) >= item.inStorage;
    item.quantity += 1;
    cart[name] = item;
    this.setState(() => ({
      cartList: cart,
      // disabled: {
      //   ...prevState.disabled,
      //   [name]: disabled,
      // },
    }));
  }

  decreasesItem(event) {
    const {
      target: { name },
    } = event;
    const { cartList } = this.state;
    const cart = { ...cartList };
    const item = { ...cart[name] };

    if (item.quantity === 1) {
      this.removeItem(event);
    } else {
      item.quantity -= 1;
      cart[name] = item;
      this.setState(() => ({
        cartList: cart,
        // disabled: {
        //   ...prevState.disabled,
        //   [name]: false,
        // },
      }));
    }
  }

  removeItem({ target: { name } }) {
    const { cartList } = this.state;
    const cart = { ...cartList };
    delete cart[name];
    // sessionStorage.removeItem(name);
    this.setState(() => ({
      cartList: cart,
    }));
  }

  totalPrice() {
    const { cartList } = this.state;
    let totalPrice = 0;
    Object.values(cartList).forEach(({ price, quantity }) => {
      totalPrice += price * quantity;
    });
    return totalPrice;
  }

  elementList(value) {
    const { id, title, price, thumbnail, quantity } = value;
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
          onClick={ () => decrease(value) }
        >
          decrementar
        </button>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          name={ id }
          // disabled={ disabled[id] }
          onClick={ () => add(value) }
        >
          Incrementar
        </button>
        <p>{price * quantity}</p>
      </li>
    );
  }

  render() {
    const { pay } = this.state;
    const { cartList } = this.props;
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

    const { reset } = this.props;

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
