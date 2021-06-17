import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { item: { title, thumbnail, price, id } } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <p>{title}</p>
        <img src={ thumbnail } alt="imagem produto" />
        <p>{price}</p>
        <Link data-testid="product-detail-link" to={ `/product-details/${id}` }>
          DETALHES
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
