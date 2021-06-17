import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/index';
import './ProductDetail.css';
import AddToCartBttn from '../ShoppingCart/AddToCartBttn';

export default class ProductDetail extends Component {
  render() {
    const { location: { state: { name, image, price, spec } },
      match: { params: { id } } } = this.props;
    return (
      <div>
        <header className="productDetailHeader">
          <Link to="/" className="LinkBack"> Voltar </Link>
          <CartButton />
        </header>
        <div>
          <h1 data-testid="product-detail-name">{name}</h1>
          <img src={ image } alt="Product Thumbnail" />
          <p className="priceP">
            {price.total }
            <span>
              &nbsp;
              { price.currency }
            </span>
          </p>
          {spec.map((atributo) => (
            <div key={ atributo.id }>
              <p className="atributoP"><b>{atributo.name}</b></p>
              <span>{atributo.value_name}</span>
            </div>
          ))}
          <AddToCartBttn
            product={ {
              id,
              title: name,
              price: price.total,
              thumbnail: image,
              currency_id: price.currency,
            } }
            dataTest="product-detail-add-to-cart"
          />
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.shape({
        total: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      }).isRequired,
      spec: PropTypes.arrayOf(Object).isRequired,
    }).isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
