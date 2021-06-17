import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    const { products } = this.props;
    const { title, price, thumbnail, category_id: id } = products;
    return (
      <div>
        <img data-testid="product" src={ thumbnail } alt="product" />
        <h3>{ title }</h3>
        <h4>{ price }</h4>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product-details/${id}`,
            state: { products },
          } }
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default Products;
