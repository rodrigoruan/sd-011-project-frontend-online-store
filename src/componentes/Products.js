import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveStorage } from '../services/saveService';

class Products extends Component {
  constructor(props) {
    super(props);
    const { products } = this.props;
    this.state = {
      quantity: 0,
      products,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { quantity } = this.state;
    const count = quantity + 1;
    this.setState({ quantity: count }, () => { saveStorage(this.state); }); // pulo do gato
  }

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
          onClick={ () => this.addToCart() }
          type="button"
          data-testid="product-add-to-cart"
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
