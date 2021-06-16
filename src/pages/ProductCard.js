import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = ({
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}).isRequired;
