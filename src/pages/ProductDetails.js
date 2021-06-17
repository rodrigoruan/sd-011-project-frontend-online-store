import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from '../components/ProductRating/Rating';

export default class ProductDetails extends React.Component {
  constructor({ location }) {
    super({ location });
    this.state = location.state;
  }




  render() {
    const { title, thumbnail, price, id } = this.state;
    return (
      <div key={ id }>
        <span data-testid="product-detail-name">{ title }</span>
        <span>
          { price }
        </span>
        <img src={ thumbnail } alt="imagem do produto" />
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/ShoppingCart`,
            state: {
              shopCart:this.state
            },
          } }
        >
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          value={ JSON.stringify({ title, price, thumbnail }) }
        >
          Adicionar ao carrinho
        </button>
        </Link>
        <Rating />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;
