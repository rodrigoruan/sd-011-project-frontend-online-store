import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../actions';

import '../styles/ProductCard.css';

class ProductCard extends Component {
  renderSpan(hasFreeShipping) {
    if (hasFreeShipping) {
      return (
        <span data-testid="free-shipping">Frete Grátis</span>
      );
    }
    return (null);
  }

  render() {
    const {
      cartList,
      id,
      title,
      price,
      thumbnail,
      inStorage,
      hasFreeShipping,
      add,
    } = this.props;

    const value = { id, title, price, thumbnail, inStorage };

    const item = cartList.find((cartItem) => cartItem.id === id);
    const itemQuantity = item ? item.quantity : 0;

    return (
      <li className="product-card" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: '/productdetail',
            state: ({
              id,
              title,
              price,
              thumbnail,
              inStorage,
              hasFreeShipping,
            }),
          } }
        >
          <h4>{title}</h4>
          <img alt="foto do produto" src={ thumbnail } />
          <p>{ `R$ ${price}` }</p>
          { this.renderSpan(hasFreeShipping)}
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => add(value) }
          disabled={ inStorage <= itemQuantity }
        >
          Adicionar
        </button>
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  cartList: state.cartReducer.cartList,
});

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addToCart(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);

ProductCard.propTypes = {
  cartList: PropTypes.shape,
  add: PropTypes.func,
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;
