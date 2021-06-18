import React from 'react';
import PropTypes from 'prop-types';
import AddItemToCart from '../components/AddItemToCart';
import CartButton from '../components/CartButton';

export default class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { title, price, thumbnail } = state;
    return (
      <section>
        <CartButton />
        <img alt="imagem do produto" src={ thumbnail } />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <p>{`R$ ${price}`}</p>
        <AddItemToCart
          product={ state }
          dataTestId="product-detail-add-to-cart"
        />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};
