import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(event) {
    const { target: { value } } = event;
    const { addToCart } = this.props;
    let data = JSON.parse(value);
    if (sessionStorage[data.id]) {
      data = JSON.parse(sessionStorage[data.id]);
    }
    if ((data.quantity + 1) >= data.inStorage) {
      this.setState({ disabled: true }, addToCart(event));
    } else {
      addToCart(event);
    }
  }

  render() {
    const {
      id,
      title,
      price,
      thumbnail,
      inStorage,
    } = this.props;
    const { disabled } = this.state;
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
            }),
          } }
        >
          { console.log(inStorage) }
          <h4>{title}</h4>
          <img alt="foto do produto" src={ thumbnail } />
          <p>{ `R$ ${price}` }</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleButton }
          disabled={ disabled }
          value={ JSON.stringify({
            id,
            title,
            price,
            thumbnail,
            quantity: 1,
            inStorage,
          }) }
        >
          Adicionar
        </button>
      </li>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default ProductCard;
