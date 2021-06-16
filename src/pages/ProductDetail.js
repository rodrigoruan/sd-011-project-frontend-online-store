import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    console.log(this);
    const {
      location:
        { state:
          { produto:
            { condition, price, thumbnail, title } } } } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <h2>{ price }</h2>
        <img src={ thumbnail } alt={ `imagem de ${title}` } />
        <p>{ condition }</p>
      </div>
    );
  }
}

export default ProductDetail;

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      produto: PropTypes.shape({
        condition: PropTypes.string,
        price: PropTypes.string,
        thumbnail: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};
