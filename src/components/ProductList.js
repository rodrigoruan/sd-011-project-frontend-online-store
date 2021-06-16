import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductList extends Component {
  render() {
    const { products: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          {price}
        </p>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
