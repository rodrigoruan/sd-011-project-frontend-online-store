import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import cart from '../Images/cart.png';
import Rating from './Rating';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
    this.getProduct = this.getProduct.bind(this);
    this.addItemCart = this.addItemCart.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match, location } = this.props;
    const { id } = match.params;
    const { productId } = location.state;
    const request = await getProductsFromCategoryAndQuery('$CATEGORY_ID', `${id}`);
    const product = await request.results.filter((result) => (
      result.id === productId
    ));
    console.log(product);
    await this.setState({
      product: product[0],
    });
    return product[0];
  }

  addItemCart() {
    const { createCart, location } = this.props;
    const { productToAdd } = location.state;
    productToAdd.cartItem = true;
    createCart(productToAdd);
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const { product } = this.state;
    return (
      <div>
        <img src={ product.thumbnail } alt="product" />
        <p data-testid="product-detail-name">{product.title}</p>
        <p>
          {'R$ '}
          { product.price }
        </p>
        { product.attributes && product.attributes.map((att, index) => (
          <p key={ index }>
            { att.name }
            -
            { att.value_name }
          </p>
        ))}
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addItemCart }
        >
          Adicionar ao carrinho
        </button>
        <Rating id={ id } />
        <Link to="/carrinho-compras">
          <img
            src={ cart }
            alt="carrinho-compras"
            data-testid="shopping-cart-button"
            height="200px"
          />
        </Link>
        <Link to="/">
          HOME
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(String).isRequired,
  location: PropTypes.objectOf(String).isRequired,
  createCart: PropTypes.func.isRequired,
};

export default ProductDetails;
