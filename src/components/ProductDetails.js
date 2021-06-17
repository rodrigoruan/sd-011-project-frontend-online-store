import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      rating: 0,
      showForm: false,
    };

    this.setItemStorage = this.setItemStorage.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.renderRating = this.renderRating.bind(this);
  }

  componentDidMount() {
    const productInfo = JSON.parse(localStorage.getItem('productInfos'));
    if (!productInfo) {
      localStorage.setItem('productInfos', JSON.stringify([]));
    }
  }

  setItemStorage() {
    const productInfo = JSON.parse(localStorage.getItem('productInfos'));
    const { location: { state: { id, title, thumbnail, price } } } = this.props;
    productInfo.push({
      id,
      title,
      thumbnail,
      price,
    });
    console.log(productInfo);
    localStorage.setItem('productInfos', JSON.stringify(productInfo));
  }

  inputHandler({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  renderRating() {
    this.setState({
      showForm: true,
    });
  }

  render() {
    const { location: { state: { title, thumbnail, price } } } = this.props;
    const { email, message, rating, showForm } = this.state;
    return (
      <div>
        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
        <h4 data-testid="product-detail-name">{title}</h4>
        <img src={ thumbnail } alt={ title } />
        <span>
          R$
          { price }
        </span>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.setItemStorage }
        >
          Adicionar ao carrinho
        </button>
        <form>
          <input
            name="email"
            required
            placeholder="Email"
            type="text"
            value={ email }
            onChange={ this.inputHandler }
          />
          <textarea
            name="message"
            placeholder="Message"
            data-testid="product-detail-evaluation"
            cols="30"
            rows="10"
            value={ message }
            onChange={ this.inputHandler }
          />
          <label htmlFor="rating">
            1
            <input
              type="radio"
              id="1"
              name="rating"
              value="1"
              onChange={ this.inputHandler }
            />
          </label>
          <label htmlFor="rating">
            2
            <input
              type="radio"
              id="2"
              name="rating"
              value="2"
              onChange={ this.inputHandler }
            />
          </label>
          <label htmlFor="rating">
            3
            <input
              type="radio"
              id="3"
              name="rating"
              value="3"
              onChange={ this.inputHandler }
            />
          </label>
          <label htmlFor="rating">
            4
            <input
              type="radio"
              id="4"
              name="rating"
              value="4"
              onChange={ this.inputHandler }
            />
          </label>
          <label htmlFor="rating">
            5
            <input
              type="radio"
              id="5"
              name="rating"
              value="5"
              onChange={ this.inputHandler }
            />
          </label>
          <button onClick={ this.renderRating } type="button">Avaliar</button>
        </form>
        { showForm ? <Rating email={ email } msg={ message } rating={ rating } /> : null}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: {
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.string,
    },
  }).isRequired,
};
