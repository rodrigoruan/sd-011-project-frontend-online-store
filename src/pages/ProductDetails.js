import React from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends React.Component {
  constructor({ location }) {
    super({ location });
    this.state = location.state;
  }

  render() {
    const { title, thumbnail, price, id } = this.state;
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

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;
