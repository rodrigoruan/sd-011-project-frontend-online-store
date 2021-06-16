import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductsCard extends Component {
  render() {
    const {
      products: { results },
    } = this.props;
    return (
      <div>
        { results.map(({ title, thumbnail, price }, index) => (
          <div data-testid="product" key={ index }>
            <h2>{title}</h2>
            <img src={ thumbnail } alt={ title } />
            <p>{price}</p>
          </div>
        ))}
      </div>
    );
  }
}

ProductsCard.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.objectOf({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
