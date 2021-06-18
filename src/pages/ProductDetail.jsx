import React, { Component } from 'react';
import Rater from 'react-rater';
// All credits of Rater to https://reactjsexample.com/a-star-rater-in-react-js/
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductEvaluation from '../components/ProductEvaluation';
import 'react-rater/lib/react-rater.css';

export default class ProductDetail extends Component {
  constructor({ location }) {
    super({ location });
    let cartSize = 0;
    Object.values(sessionStorage).forEach((value) => {
      if (!value.includes('rendererID')) {
        const data = JSON.parse(value);
        cartSize += data.quantity;
      }
    });
    this.state = {
      price: location.state.price,
      thumbnail: location.state.thumbnail,
      title: location.state.title,
      hasFreeShipping: location.state.hasFreeShipping,
      email: '',
      textArea: '',
      rating: 1,
      cartSize,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'email') {
      this.setState({ email: event.target.value });
    }
    if (event.target.name === 'commentary') {
      this.setState({ textArea: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, email, textArea, rating } = this.state;
    const data = JSON.parse(localStorage.getItem(title)) || [];
    const evaluations = JSON.stringify([...data, { email, textArea, rating }]);
    localStorage.setItem(title, evaluations);
    this.setState({
      email: '',
      textArea: '',
      rating: 1,
    });
  }

  retrieveRating(event) {
    this.setState({ rating: event.rating });
  }

  addToCart({ target: { value } }) {
    const data = JSON.parse(value);
    const key = data.title;
    if (sessionStorage[key]) {
      const recoveredObject = JSON.parse(sessionStorage[key]);
      const copy = { ...recoveredObject };
      copy.quantity += 1;
      sessionStorage[key] = JSON.stringify(copy);
    } else {
      sessionStorage.setItem(key, value);
    }
    this.setState((prevState) => ({ cartSize: prevState.cartSize + 1 }));
  }

  render() {
    const { title,
      thumbnail,
      price,
      email,
      textArea,
      rating,
      cartSize,
      hasFreeShipping,
    } = this.state;
    let freeShipping = null;
    if (hasFreeShipping) freeShipping = 'Frete Grátis';
    const showEvaluations = localStorage.getItem(title) || false;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <p data-testid="shopping-cart-size">
          {cartSize}
        </p>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <h3>{price}</h3>
        <img src={ thumbnail } alt={ title } />
        <h4 data-testid="free-shipping">{ freeShipping }</h4>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
          value={ JSON.stringify({ title, price, thumbnail, quantity: 1 }) }
        >
          Adicionar ao carrinho
        </button>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              required
              placeholder="Obrigatório"
            />
          </label>
          <Rater
            total={ 5 }
            rating={ rating }
            onRate={ (event) => {
              this.retrieveRating(event);
            } }
          />
          <label htmlFor="commentary">
            Comentários:
            <textarea
              name="commentary"
              id=""
              cols="30"
              rows="10"
              value={ textArea }
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
              placeholder="Opcional"
            />
          </label>
          <input
            type="submit"
            value="Avaliar"
            onClick={ this.handleSubmit }
          />
        </form>
        {
          showEvaluations
            ? (
              <ProductEvaluation
                name={ title }
              />
            )
            : null
        }
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.object,
}.isRequired;
