import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Products.css';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    const { title, img, price } = this.props;
    return (
      <Link to={ `/product-details/${title}` } data-testid="product-detail-link">
        <div className="product" data-testid="product" aria-hidden="true">
          <p>{ title }</p>
          <img src={ img } alt="produto" />
          <p>{ price }</p>
        </div>
      </Link>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Products;
