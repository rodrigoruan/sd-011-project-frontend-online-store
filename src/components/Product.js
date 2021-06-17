import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Product extends Component {
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
    const { location: { state } } = this.props;
    const { title, id, price, thumbnail, attributes } = state;
    const object = { counter, price, thumbnail, id, attributes, title };
    const json = JSON.stringify(object);
    localStorage.setItem(title, json);
  }

  render() {
    const { location:
      { state: { title, price, thumbnail, attributes, shipping } } } = this.props;
    return (
      <>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        {
          shipping.free_shipping ? <p data-testid="free-shipping">Frete Grátis!</p> : null
        }
        <p>
          R$
          {price}
        </p>
        <div>
          <ul>
            {attributes && attributes.map(({ name }, index) => (
              <li key={ index }>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
          type="button"
        >
          Adicionar ao Carrinho
        </button>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
      </>
    );
  }
}

Product.propTypes = {
  location: PropTypes.shape({
    state: {
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      attributes: PropTypes.arrayOf(PropTypes.object),
      free_shipping: PropTypes.bool,
    },
  }).isRequired,
};
