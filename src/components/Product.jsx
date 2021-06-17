import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class Product extends Component {
  render() {
    const { id, title, price, thumbnail } = this.props;

    return (
      <div data-testid="product">
        <span>{ id }</span>
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link to={`/Details/:${id}`} data-testid="product-detail-link"></Link>
      </div>
    );
  }
}
Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
