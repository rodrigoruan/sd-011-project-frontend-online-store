import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/Button';

export default class ProductDetails extends Component {
  render() {
    const { location: { state } } = this.props;
    const { title, thumbnail, price, attributes } = state;
    const testid = 'product-detail-add-to-cart';

    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img
            src="images/Carrinho-de-Compras.png"
            alt="Carrinho de Compras"
            width="50px"
          />
        </Link>
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={ thumbnail } alt={ title } />
        <h4>{ price }</h4>
        <ul>
          {attributes.map((atributo, index) => (
            <li
              key={ index }
            >
              {`${atributo.name}: `}
              {atributo.value_name}
            </li>
          ))}
        </ul>
        <Button
          product={ state }
          testid={ testid }
        />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf,
  }),
}.isRequired;
