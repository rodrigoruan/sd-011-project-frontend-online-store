import React from 'react';
import PropTypes from 'prop-types';
import AddItemToCart from '../components/AddItemToCart';

export default class ProductDetails extends React.Component {
  render() {
    const { location, forceAppUpdate } = this.props;
    const { state } = location;
    const { title, price, thumbnail } = state;
    return (
      <section>
        <img alt="imagem do produto" src={ thumbnail } />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <p>{`R$ ${price}`}</p>
        <AddItemToCart
          product={ state }
          dataTestId="product-detail-add-to-cart"
          forceAppUpdate={ forceAppUpdate }
        />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  forceAppUpdate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};
