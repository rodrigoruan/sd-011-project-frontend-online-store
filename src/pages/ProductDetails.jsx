import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import { getProductsFromCategoryAndQuery } from '../services/api';
import '../styles/productDetails.css';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      product: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.searchProducts();
  }

  handleClick(product) {
    const { addToCart } = this.props;
    addToCart(product);
  }

  ratingChanged = (newRating) => {
    console.log(newRating);
  };

  async searchProducts() {
    const { match: { params } } = this.props;
    const { category, id, query } = params;
    const fetchProducts = await getProductsFromCategoryAndQuery(category, query);
    const product = fetchProducts.results.find((value) => value.id === id);
    this.setState({
      product,
      loading: false,
    });
  }

  render() {
    const { loading, product } = this.state;
    const { cart } = this.props;
    const { thumbnail, price, title, attributes } = product;
    return loading ? (
      <div>
        <h3>loading...</h3>
        <h4 data-testid="shopping-cart-size">{cart.length}</h4>
      </div>
    ) : (
      <main>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <span className="shopping-cart-button">
            {' '}
            { /* */ }
            <Link data-testid="shopping-cart-button" to="/shoppingcart">
              <button
                className="material-icons white-bg"
                type="button"
              >
                shopping_cart
              </button>
            </Link>
            <span data-testid="shopping-cart-size">{cart.length}</span>
          </span>
        </Link>
        <h1 data-testid="product-detail-name">{ `${title} - R$ ${price}` }</h1>
        <img src={ thumbnail } alt="product" className="img-product-details" />
        <div className="features">
          <h3>Características</h3>
          <ul>
            {attributes.filter(({ name, value_name: value }) => name.toUpperCase()
              !== 'UNDEFINED' && value.toUpperCase() !== 'UNDEFINED')
              .map(({ name, value_name: value }, i) => (
                <li key={ i }>{ `${name} : ${value}`}</li>))}
            { product.shipping.free_shipping
              ? <li data-testid="free-shipping">Frete grátis</li>
              : null }
          </ul>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.handleClick(product) }
        >
          Adicionar ao carrinho
        </button>

        <div className="avaliation-container">
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Digite sua avaliação"
          />
          <ReactStars
            count={ 5 }
            onChange={ this.ratingChanged }
            size={ 24 }
            activeColor="#ffd700"
          />
          <button type="button" className="btn submit">Avaliar</button>
        </div>
      </main>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      query: PropTypes.string,
      category: PropTypes.string,
    }),
  }),
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ProductDetails.defaultProps = {
  match: {
    params: {
      query: '',
    },
  },
};
