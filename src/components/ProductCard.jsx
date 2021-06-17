import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { item: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <p>{title}</p>
        <img src={ thumbnail } alt="imagem produto" />
        <p>{price}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
