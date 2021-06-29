import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Comments from './Comments';
import './ProductDetails.css';
import back from '../images/arrow_back.svg';

export default class ProductDetails extends Component {
  render() {
    const { location:
      { state:
        { product,
        },
      }, addCart, cartItems } = this.props;

    return (
      <>
        <header className="detail-header">
          <Link exact to="/">
            <img src={ back } alt="Home" className="back" />
          </Link>
          <h1> Detalhes </h1>
          <Link
            data-testid="shopping-cart-button"
            to="/cart"
          >
            <div className="cart-home">
              <div className="cart-items">
                <p data-testid="shopping-cart-size">
                  { cartItems.reduce((acc, curr) => (acc + curr.quantity), 0)}
                </p>
              </div>
            </div>
          </Link>
        </header>
        <div className="detail-product">
          <div className="product-img">
            <img src={ product.thumbnail } alt={ product.title } />
          </div>
          <div className="detail-info">
            <div data-testid="product">
              <h4 data-testid="product-detail-name">{product.title}</h4>
              <p className="item-price">{`R$ ${product.price}`}</p>
              <br />
              <div className="details-resume">
                <h5>Detalhes</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non vestibulum ex, nec viverra odio. Integer magna urna, ultricies vel ultrices eget, ultrices id nunc. Nunc rhoncus auctor elit, et interdum mauris porttitor eget. Praesent pulvinar elit luctus est laoreet ornare. </p>
              </div>
            </div>
            <br />
            <button
              className="add-cart-detail"
              data-testid="product-detail-add-to-cart"
              type="button"
              onClick={ () => addCart(product) }
              value={ product.id }
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
        <div>
          <Comments id={ product.id } />
        </div>
      </>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        thumbnail: PropTypes.string,
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  cartItems: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    reduce: PropTypes.func,
  }).isRequired,
};
