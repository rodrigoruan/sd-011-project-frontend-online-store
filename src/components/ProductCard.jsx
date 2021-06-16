import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div
        className="product-card"
        data-testid="product"
      >
        <h4>{ title }</h4>
        <img src={ thumbnail } alt="imagem do produto pesquisado" />
        <p>{ price }</p>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = ({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}).isRequired;
