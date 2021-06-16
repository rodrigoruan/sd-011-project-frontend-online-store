import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductsCard extends Component {
  render() {
    const {
      products: { results },
    } = this.props;
    return (
      <div>
        { results.map((result, index) => {
          const { id, title, thumbnail, price } = result;
          return (
            <div data-testid="product" key={ index }>
              <h2>{title}</h2>
              <img src={ thumbnail } alt={ title } />
              <p>{price}</p>
              <Link
                data-testid="product-detail-link"
                to={ { pathname: `/ProductDetails/${id}`, state: { result } } }
              >
                Mais Detalhes
              </Link>
            </div>
          );
        })}
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
