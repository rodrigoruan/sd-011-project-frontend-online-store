import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductDetail extends Component {
  constructor({ location }) {
    super({ location });
    this.state = location.state;
  }

  render() {
    const { title, thumbnail, price } = this.state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <h3 data-testid="product-detail-name">{title}</h3>
        <h3>{ price }</h3>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.object,
}.isRequired;
