import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductStorage extends Component {
  render() {
    const { item: { title, price, thumbnail } } = this.props;
    return (
      <div>
        <h5 data-testid="shopping-cart-product-name">{ title }</h5>
        <p>{ `R$ ${price}` }</p>
        <div>
          <img src={ thumbnail } alt={ title } width="70px" />
        </div>
      </div>
    );
  }
}
ProductStorage.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
