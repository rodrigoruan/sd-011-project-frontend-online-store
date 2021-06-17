import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AddCarrinho } from './index';

class ProductDetailCard extends Component {
  render() {
    const { title, imgPath, price, id } = this.props;
    return (
      <div>
        <Link
          to="/shoppingCart"
          alt="shopping-cart"
          data-testid="shopping-cart-button"
        >
          carrinho

        </Link>
        <div data-testid="product">
          <h3 data-testid="product-detail-name">{title}</h3>
          <img src={ imgPath } alt={ title } />
          <p>{price}</p>
        </div>
        <AddCarrinho
          testId="product-detail-add-to-cart"
          title={ title }
          price={ price }
          id={ id }
        />
      </div>
    );
  }
}

export default ProductDetailCard;

ProductDetailCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
