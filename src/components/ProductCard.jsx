import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../actions';

import '../styles/ProductCard.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    const { id } = this.props;

    let disabled = false;
    const item = sessionStorage[id];
    if (item) {
      const itemObject = JSON.parse(item);
      disabled = itemObject.quantity >= itemObject.inStorage;
    }
    this.state = {
      disabled,
    };
    this.renderSpan = this.renderSpan.bind(this);
  }

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
      id,
      title,
      price,
      thumbnail,
      inStorage,
      hasFreeShipping,
      add,
    } = this.props;
    const { disabled } = this.state;
    const value = { id, title, price, thumbnail, inStorage };
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
          disabled={ disabled }
        >
          Adicionar
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addToCart(value)),
});

export default connect(null, mapDispatchToProps)(ProductCard);

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;
