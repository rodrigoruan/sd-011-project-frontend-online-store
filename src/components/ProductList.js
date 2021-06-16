import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    const { products: { title, price, thumbnail, id } } = this.props;

    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          {price}
        </p>
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { detail: products },
          } }
          data-testid="product-detail-link"
        >
          detalhes
        </Link>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
