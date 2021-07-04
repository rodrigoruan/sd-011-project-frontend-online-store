import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import '../styles/ProductDetails.css';
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
    const condition = (productToAdd.available_quantity > productToAdd.cartCount);
    if (productToAdd.cartCount && condition) {
      productToAdd.cartCount += 1;
    } else {
      productToAdd.cartCount = 1;
    }
    createCart(productToAdd);
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const { product } = this.state;
    return (
      <div className="productPage">
        <div className="prdHeader">
          <Link data-testid="shopping-cart-button" to="/carrinho-compras">
            <FontAwesomeIcon icon={ faShoppingCart } />
          </Link>
          <Link to="/">
            HOME
          </Link>
        </div>
        <div className="prdTop">
          <div className="prdInfos">
            <p data-testid="product-detail-name" className="prdTitle">{product.title}</p>
            <img src={ product.thumbnail } alt="product" />
            <p className="prdPrice">
              {'R$ '}
              { product.price }
            </p>
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ this.addItemCart }
              className="prdAdd"
            >
              Adicionar ao carrinho
            </button>
            <div className="prdSpecs">
              { product.attributes && product.attributes.map((att, index) => (
                <div className="table" key={ index }>
                  <p className="firstP">
                    { att.name }
                    :
                  </p>
                  <p>
                    { att.value_name }
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Rating id={ id } />
        </div>
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
