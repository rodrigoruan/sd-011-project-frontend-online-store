import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    const { title, img, price } = this.props;
    return (
      <div data-testid="product">
        <Link to="/details" className="details">
          <p>{ title }</p>
          <img src={ img } alt="produto" />
          <p>{ price }</p>
        </Link>
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Products;
