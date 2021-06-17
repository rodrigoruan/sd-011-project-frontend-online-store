import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

class Product extends Component {
  render() {
    const { title, thumbnail, price, id, addCart } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3>{title}</h3>
        <p>{`R$ ${price}`}</p>
        <AddToCartButton
          addCart={ addCart }
          title={ title }
          price={ price }
          id={ id }
        />

        <Link
          to={ {
            pathname: `/details/${id}`,
            aboutProps: {
              title,
              image: thumbnail,
              price,
              addCartFunction: addCart,
            },
          } }
          data-testid="product-detail-link"
        >
          Mais detalhes
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;

export default Product;
