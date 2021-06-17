import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/index';
import './ProductDetail.css';

export default class ProductDetail extends Component {
  render() {
    const { location: { state: { name, image, price, spec } } } = this.props;
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
};
