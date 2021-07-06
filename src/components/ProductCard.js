import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/Products.css';

export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
  }

  handleClick = () => {
    this.setState((previous) => ({
      counter: previous.counter + 1,
    }));
    const { counter } = this.state;
    const { products } = this.props;
    const { title, price, thumbnail, id, attributes } = products;
    const object = { counter, price, thumbnail, id, attributes, title };
    const json = JSON.stringify(object);
    localStorage.setItem(title, json);
  }

  render() {
    const { props, state } = this;
    const { counter } = state;
    const { products } = this.props;
    const { title, price, thumbnail, id, attributes, shipping } = products;
    const availableQuantity = props.available_quantity;

    return (
      <li className="card">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            state: { title,
              price,
              thumbnail,
              id,
              attributes,
              shipping,
              availableQuantity,
            },
          } }
        >
          <div data-testid="product" className="product">
            <img src={ thumbnail } alt={ `Foto do produto ${title}` } />
            <h3>{ title }</h3>
            {shipping.free_shipping ? (
              <p className="shipping" data-testid="free-shipping">Frete Grátis!</p>
            ) : null}
            <p>{ `R$ ${price.toLocaleString('pt-BR')}` }</p>
          </div>
        </Link>
        <button
          disabled={ counter > availableQuantity }
          className="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
          type="button"
        >
          Adicionar ao Carrinho
        </button>
      </li>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.string,
  free_shipping: PropTypes.bool,
}.isRequired;
