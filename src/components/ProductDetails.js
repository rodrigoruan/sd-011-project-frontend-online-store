import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductDetails extends Component {
  render() {
    const { location: { state: { result: { title, thumbnail, price } } } } = this.props;
    console.log(this);
    return (
      <div>
        <h2 data-testid="product-detail-name">{`${title} - ${price}`}</h2>
        <img src={ thumbnail } alt={ title } />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf({
      results: PropTypes.objectOf({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
