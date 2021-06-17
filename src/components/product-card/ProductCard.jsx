import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product-card.css';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, price, id, thumbnail } = product;

    return (
      <div data-testid="product" id={ id } key={ id }>
        <img src={ thumbnail } alt={ title } />
        <div className="wrapper">
          <h3>{ title }</h3>
          <p>Preço: { price }</p>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
