import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Products extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
};

Products.defaultProps = {
  title: '',
  thumbnail: '',
  price: 0,
};
