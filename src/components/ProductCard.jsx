import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
      <div
        className="product-card"
        data-testid="product"
      >
        <Link
          to={ `/details/${title}/${id}` }
          className="details"
          data-testid="product-detail-link"
        >
          <h4>{ title }</h4>
          <img src={ thumbnail } alt="imagem do produto pesquisado" />
          <p>{ price }</p>
          <p>{ id }</p>
        </Link>
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
