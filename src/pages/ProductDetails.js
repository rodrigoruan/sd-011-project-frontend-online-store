import React from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { title, id, price, thumbnail } = state;
    return (
      <div key={ id }>
        <span data-testid="product-detail-name">{ title }</span>
        <span>
          { price }
        </span>
        <img src={ thumbnail } alt="imagem do produto" />
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    location:PropTypes.objectOf,
    state: PropTypes.objectOf,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};
