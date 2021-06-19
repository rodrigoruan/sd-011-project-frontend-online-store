import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddItemToCart from './AddItemToCart';

class ProductCard extends React.Component {
  render() {
    const { product, forceAppUpdate } = this.props;
    const { product: { title, price, thumbnail, id, shipping } } = this.props;
    const { free_shipping: freeShipping } = shipping;

    return (
      <div className="product-card" data-testid="product">
        <Link
          to={ {
            pathname: `/detalhes/${id}`,
            state: product,
          } }
          data-testid="product-detail-link"
        >
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
          <div>{ freeShipping && <p data-testid="free-shipping">Frete Gratis</p> }</div>
        </Link>
        <AddItemToCart
          product={ product }
          dataTestId="product-add-to-cart"
          forceAppUpdate={ forceAppUpdate }
        />
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = ({
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.string,
}).isRequired;
