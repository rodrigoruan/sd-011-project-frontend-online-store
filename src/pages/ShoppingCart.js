import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import image from '../imgs/Seta.png';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shopCart: props.shopCart,
    };

    this.renderShopCart = this.renderShopCart.bind(this);
  }

  renderShopCart(shopCart) {
    return (
      shopCart.map(({ thumbnail, title, price, amount }, index) => (
        <div key={ index }>
          <span>{ title }</span>
          <img src={ thumbnail } alt="product" />
          <p>{ price }</p>
          <p>{ amount }</p>
        </div>
      ))
    );
  }

  render() {
    const { shopCart } = this.state;
    return (
      <>
        <Link to="/">
          <img
            width="30px"
            src={ image }
            alt="imagem de voltar"
          />
        </Link>
        {shopCart === null
          ? <p>Seu carrinho está vazio</p>
          : this.renderShopCart(shopCart)}
      </>
    );
  }
}
export default ShoppingCart;

ShoppingCart.propTypes = {
  shopCart: PropTypes.arrayOf(PropTypes.objectWithShape({
    amount: PropTypes.number,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  })),
}.isRequired;
