import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [],
    };

    this.getProduct = this.getProduct.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loadCartList = this.loadCartList.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { categoryId, id } } } = this.props;
    const productObj = await api.getProductsFromCategoryAndQuery(categoryId, '');
    const product = productObj.results
      .find((prod) => prod.id === id);
    this.setState({ product });
  }

  handleClick() {
    const { product: { title, thumbnail, price } } = this.state;
    const previousList = this.loadCartList();
    previousList.push({ title, thumbnail, price });
    localStorage.setItem('cartList', JSON.stringify(previousList));
  }

  loadCartList() {
    let previousList = localStorage.getItem('cartList');
    if (previousList === null) {
      previousList = [];
      return previousList;
    }
    return JSON.parse(previousList);
  }

  render() {
    const { product: { title, thumbnail, price } } = this.state;
    return (
      <div>
        <Link to="/">
          Página Inicial
        </Link>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <div>
          <img src={ thumbnail } alt="product" />
          <p>
            Preço: R$
            {' '}
            { price }
          </p>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
        <Link to="/ShoppingCart" data-testid="shopping-cart-button">
          <FaShoppingCart size={ 30 } />
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      categoryId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
