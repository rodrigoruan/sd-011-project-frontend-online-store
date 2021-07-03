import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../actions';

import 'bulma/css/bulma.min.css';
import '../styles/ProductCard.css';

class ProductCard extends Component {
  renderSpan(hasFreeShipping) {
    if (hasFreeShipping) {
      return (
        <span className="frete" data-testid="free-shipping">Frete Grátis</span>
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
      <li className="product-card box center" data-testid="product">
        <Link
          className="Link"
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
          <img className="center img" alt="foto do produto" src={ thumbnail } />
          <div>
            <h4 className="text">{title}</h4>
            <p>
              <b>
                { `R$ ${price}  ` }
              </b>
              {this.renderSpan(hasFreeShipping)}
            </p>
          </div>
        </Link>
        <button
          className="button is-primary"
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
