import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/api';
import './product-card.css';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {

  async getProductById({ currentTarget }) {
    const { id, title } = currentTarget;
    const result = await api.getProductsFromCategoryAndQuery(id, title);
    return result;
  }

  render() {
    const { product } = this.props;
    console.log(product)
    const { title, price, id, thumbnail } = product;
  
    return (
      <div
        title={ id }
        onClick={ this.getProductById }
        data-testid="product"
        id={ id }
        key={ id }
      >
        <img src={ thumbnail } alt={ title } />
        <div className="wrapper">
          <h3>{ title }</h3>
          <p>
            Preço:
            { price }
            <Link to={ `/product-details/${id}`}>Ver Detalhes</Link>
          </p>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
