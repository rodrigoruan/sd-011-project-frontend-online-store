import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import '../App.css';

class ProductDetails extends React.Component {
  constructor() {
    super();
    const details = this.cartItensStorage();
    const productArray = Object.values(details);
    this.state = {
      product: [],
      rating: null,
      quantity: productArray.length,
    };

    this.getProduct = this.getProduct.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loadCartList = this.loadCartList.bind(this);
    this.setRating = this.setRating.bind(this);
    this.cartItensStorage = this.cartItensStorage.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  handleClick() {
    const { product: { title, thumbnail, price } } = this.state;
    const previousList = this.loadCartList();
    previousList.push({ title, thumbnail, price });
    localStorage.setItem('cartList', JSON.stringify(previousList));
    const details = this.cartItensStorage();
    const productArray = Object.values(details);
    this.setState({
      quantity: productArray.length,
    });
  }

  async getProduct() {
    const { match: { params: { categoryId, id } } } = this.props;
    const productObj = await api.getProductsFromCategoryAndQuery(categoryId, '');
    const product = productObj.results
      .find((prod) => prod.id === id);
    this.setState({ product });
  }

  setRating(event) {
    this.setState({
      rating: event,
    });
  }

  cartItensStorage() {
    let previousList = localStorage.getItem('cartList');
    if (previousList === null) {
      previousList = {};
      return previousList;
    }
    return JSON.parse(previousList);
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
    const { product: { title, thumbnail, price }, quantity } = this.state;
    const { rating } = this.state;
    const numberOfStars = 5;
    return (
      <div>
        <header className="header-details-product">
          <Link to="/">
            Página Inicial
          </Link>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            <FaShoppingCart size={ 30 } />
          </Link>
        </header>
        <h3 data-testid="product-detail-name">
          { title }
          {' - R$ '}
          { price === undefined ? price : parseFloat(price).toFixed(2).replace('.', ',') }
        </h3>
        <div className="container-image-and-product-details">
          <div className="container-image-details">
            <img className="image-details" src={ thumbnail } alt="product" />
          </div>
          <div className="container-description-details">
            <h4>Especificações técnicas</h4>
            <ul>
              <li>Especificação um</li>
              <li>Especificação dois</li>
              <li>Especificação três</li>
              <li>Especificação quatro</li>
              <li>Especificação cinco</li>
              <li>Especificação seis</li>
            </ul>
          </div>
        </div>
        <h3>
          Quantidade
        </h3>
        <button
          className="decrease-btn"
          type="button"
        >
          -
        </button>
        <span
          className="quantity-product-details"
        >
          { quantity }
        </span>
        <button
          className="increase-btn"
          type="button"
        >
          +
        </button>
        <button
          type="button"
          className="add-to-cart-btn-details"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
        <h3>Avaliações</h3>
        <form>
          <div className="container-forms">
            <input
              type="email"
              placeholder="Email"
              size="30"
              className="input-email-forms"
              onChange={ this.getEmailAndMessage }
            />
            <div className="container-stars">
              {[...Array(numberOfStars)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label htmlFor={ index } key={ index }>
                    <input
                      id={ index }
                      className="radio-star"
                      type="radio"
                      name="rating"
                      value={ ratingValue }
                      required
                      onClick={ () => this.setRating(ratingValue) }
                    />
                    <FaStar
                      rating={ rating }
                      color={ ratingValue <= rating ? '#ffc107' : '#e4e5e9' }
                      className="star-rating"
                      size={ 30 }
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Mensagem(opcional)"
            rows="6"
            cols="60"
          />
          <button
            type="button"
            className="btn-submit-avaliation"
          >
            Avaliar
          </button>
        </form>
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
