import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCart from './ProductCart';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {

  // }

  render() {
    const { products } = this.props;
    const { title, price, thumbnail, category_id: id } = products;
    return (
      <div>
        <img data-testid="product" src={ thumbnail } alt="product" />
        <h3>{ title }</h3>
        <h4>{ price }</h4>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product-details/${id}`,
            state: { products },
          } }
        >
          Detalhes
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default Products;
