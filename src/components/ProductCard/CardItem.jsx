import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardItem.css';
import { Link } from 'react-router-dom';

export default class CardItem extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
    this.handleCartButtonClick = this.handleCartButtonClick.bind(this);
  }

  handleCartButtonClick() {
    const { product:
      { id, title, price, thumbnail, currency_id: currencyId,
      } } = this.props;
    this.setState((pState) => ({
      counter: pState.counter + 1,
    }));
    const { counter } = this.state;
    const obj = {
      id,
      title,
      price,
      thumbnail,
      currencyId,
      counter,
    };
    localStorage.setItem(id, JSON.stringify(obj));
  }

  render() {
    const { product:
      { id, title, price, thumbnail, currency_id: currencyId, attributes,
      } } = this.props;
    return (
      <div className="CardContainer" data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt="Imagem do produto" className="Thumbnail" />
        <p className="pPrice">
          {price}
          <span>
            {currencyId}
          </span>
        </p>
        <Link
          to={ {
            pathname: `/product/${id}`,
            state: {
              name: title,
              image: thumbnail,
              price: { total: price, currency: currencyId },
              spec: attributes,
            },
          } }
          data-testid="product-detail-link"
        >
          Mais detalhes
        </Link>
        <button
          type="button"
          onClick={ this.handleCartButtonClick }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>

      </div>
    );
  }
}
CardItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    currency_id: PropTypes.string.isRequired,
    attributes: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
};
