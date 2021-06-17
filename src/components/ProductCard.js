import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/Products.css';

class ProductCard extends Component {
  render() {
    const { products } = this.props;
    const { id, title, thumbnail, price } = products;

    return (
      <div className="card">
        <Link
          to={ { pathname: `/product/${id}`, state: products } }
          data-testid="product-detail-link"
        >
          <div data-testid="product" className="product">
            <img src={ thumbnail } alt={ `Foto do produto ${title}` } />
            <h3>{ title }</h3>
            <p>{ `${price} R$` }</p>
          </div>
        </Link>
        <button className="button" type="button">Adicionar ao carrinho</button>
      </div>

    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
};

ProductCard.defaultProps = {
  products: PropTypes.shape({
    title: '',
    thumbnail: '',
    price: 0,
  }),
};

export default ProductCard;
