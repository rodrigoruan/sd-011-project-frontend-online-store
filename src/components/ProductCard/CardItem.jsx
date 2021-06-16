import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardItem.css';

export default class CardItem extends Component {
  render() {
    const { product: { title, price, thumbnail, currency_id: currencyId } } = this.props;
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
      </div>
    );
  }
}
CardItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    currency_id: PropTypes.string.isRequired,
  }).isRequired,
};
