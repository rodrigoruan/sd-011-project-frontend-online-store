import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    console.log(this.props);
    const { produto: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img width="100px" src={ thumbnail } alt={ title } />
        <p>
          Preço:R$
          { price }
        </p>
      </div>);
  }
}

ProductCard.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
