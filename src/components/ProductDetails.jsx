import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from './CartButton';

class ProductDetail extends Component {
  render() {
    const { info } = this.props;
    const { title, price, condition, thumbnail } = info;
    return (
      <div>
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ `imagem de ${title}` } />
        <h2>{ price }</h2>
        <h3>{ condition }</h3>
        <CartButton />
      </div>
    );
  }
}

export default ProductDetail;

ProductDetail.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    condition: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};
