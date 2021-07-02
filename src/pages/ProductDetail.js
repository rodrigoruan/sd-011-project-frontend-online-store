import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomerRating from '../components/CustomerRating';
import Rating from '../components/Rating';
import ShoppingCartLink from '../components/ShoppingCartLink';
import FreeShipping from '../components/FreeShipping';

class ProductDetail extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
    this.addRating = this.addRating.bind(this);
  }

  getRatings(id) {
    const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
    let productRatings;
    if (ratings.length > 0) {
      productRatings = ratings.filter((rating) => rating.id === id);
    }
    return productRatings;
  }

  getQuantity() {
    const cartProducts = JSON.parse(localStorage.getItem('products')) || [];

    return cartProducts.reduce((acc, { quantity }) => acc + quantity, 0);
  }

  addToCart(product) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    product.quantity = 1;
    if (!products.some((value) => value.id === product.id)) {
      products.push(product);
    } else {
      const currentIndex = products.map((value) => value.id).indexOf(product.id);
      products[currentIndex].quantity += 1;
    }
    localStorage.setItem('products', JSON.stringify(products));
  }

  addRating(rating) {
    const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
    ratings.push(rating);
    localStorage.setItem('ratings', JSON.stringify(ratings));
    this.forceUpdate();
  }

  render() {
    const { location: { state: { detail } } } = this.props;
    const {
      title,
      thumbnail,
      price,
      attributes,
      installments,
      id,
      sold_quantity: soldQuantity,
      shipping: { free_shipping: freeShipping },
    } = detail;
    const productRatings = this.getRatings(id);

    return (
      <div>
        <div>
          <p data-testid="product-detail-name">{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </div>

        {
          installments ? (
            <ul>
              <li>{`${soldQuantity} unidades vendidas.`}</li>
              <li>{`Estoque: ${installments.quantity}`}</li>
            </ul>
          ) : <p>Unidade única</p>
        }

        <div>
          <p>
            Especificações:
          </p>
          <ul>
            {attributes.map((attribute, index) => (
              <li key={ index }>
                {attribute.name}
                :
                {attribute.value_name}
              </li>
            ))}
          </ul>
        </div>
        { freeShipping ? <FreeShipping /> : null }
        <CustomerRating addRatingFunction={ this.addRating } productId={ id } />
        {
          productRatings
            ? productRatings
              .map((rating, index) => <Rating key={ index } rating={ rating } />)
            : null
        }
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addToCart(detail) }
        >
          Adicionar ao carrinho
        </button>
        <ShoppingCartLink quantity={ this.getQuantity() } />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      detail: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        id: PropTypes.string,
        attributes: PropTypes.arrayOf(PropTypes.object),
        installments: PropTypes.shape({
          quantity: PropTypes.number,
        }),
        sold_quantity: PropTypes.number,
        shipping: PropTypes.shape({
          free_shipping: PropTypes.bool,
        }),
      }),
    }),
  }).isRequired,
};

export default ProductDetail;
