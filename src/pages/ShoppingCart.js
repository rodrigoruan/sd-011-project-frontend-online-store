import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import setaImg from '../imgs/Seta.png';
import cartImg from '../imgs/Carrinho.png';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   shopCart: props.shopCart,
    // };

    this.state = {
      shopCart: [
        {
          id: '345',
          title: 'Fórmula Infantil Em Pó Mead Johnson Enfagrow Em Lata 800g',
          thumbnail: 'http://http2.mlstatic.com/D_621120-MLA45304433058_032021-I.jpg',
          price: 44,
          amount: 0,
        },
      ],
    };

    this.renderShopCart = this.renderShopCart.bind(this);
    this.getCartTotal = this.getCartTotal.bind(this);
  }

  getCartTotal(cart) {
    return cart.reduce((acc, curr) => {
      acc += curr.price * curr.amount;
      return acc;
    }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  removeItemFromCart(itemId) {
    const { shopCart } = this.state;
    const updatedCart = shopCart.filter((item) => item.id !== itemId);
    this.updateCart(updatedCart);
  }

  increaseItemAmount(itemId) {
    const { shopCart } = this.state;
    const itemIndex = shopCart.findIndex((item) => item.id === itemId);
    const updatedCart = [...shopCart];
    updatedCart[itemIndex].amount += 1;
    this.updateCart(updatedCart);
  }

  decreaseItemAmount(itemId) {
    const { shopCart } = this.state;
    const itemIndex = shopCart.findIndex((item) => item.id === itemId);
    const updatedCart = [...shopCart];

    if (updatedCart[itemIndex].amount > 1) {
      updatedCart[itemIndex].amount -= 1;
    }

    this.updateCart(updatedCart);
  }

  updateCart(updatedCart) {
    this.setState({ shopCart: updatedCart });
  }

  renderShopCart(shopCart) {
    return (
      <>
        {shopCart.map(({ id, thumbnail, title, price, amount }) => (
          <div className="shopping-cart-item-card" key={ id }>
            <button
              type="button"
              className="cart-item-button"
              onClick={ () => this.removeItemFromCart(id) }
            >
              x
            </button>
            <div className="cart-item-img-container">
              <img src={ thumbnail } alt="product" />
            </div>
            <p
              className="cart-item-title"
              data-testid="shopping-cart-product-name"
            >
              { title }
            </p>
            <button
              type="button"
              className="cart-item-button"
              onClick={ () => this.decreaseItemAmount(id) }
              data-testid="product-increase-quantity"
            >
              -
            </button>
            <div className="cart-item-amount">{ amount }</div>
            <button
              type="button"
              className="cart-item-button"
              onClick={ () => this.increaseItemAmount(id) }
              data-testid="product-increase-quantity"
            >
              +
            </button>
            <p>
              { price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
            </p>
          </div>
        ))}
        <p>
          <strong>
            Valor Total do Carrinho:
          </strong>
          {this.getCartTotal(shopCart)}
        </p>

        <button type="button">Finalizar Compra</button>
      </>
    );
  }

  render() {
    const { shopCart } = this.state;

    return (
      <>
        <Link to="/">
          <img
            width="30px"
            src={ setaImg }
            alt="imagem de voltar"
          />
        </Link>

        <div>
          <h1>
            <img width="30px" src={ cartImg } alt="carrinho de compras" />
            Carrinho de compras
          </h1>
        </div>

        {shopCart.length
          ? this.renderShopCart(shopCart)
          : <p>Seu carrinho está vazio</p>}
      </>
    );
  }
}
export default ShoppingCart;

ShoppingCart.propTypes = {
  shopCart: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  })),
}.isRequired;
