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
    this.state = {
      price: location.state.price,
      thumbnail: location.state.thumbnail,
      title: location.state.title,
      email: '',
      textArea: '',
      rating: 1,
      canCreatePE: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetCanCreatePE = this.resetCanCreatePE.bind(this);
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
    this.setState({
      canCreatePE: true,
    });
    // this.resetCanCreatePE();
    event.preventDefault();
  }

  retrieveRating(event) {
    this.setState({ rating: event.rating });
  }

  addToCart({ target: { value } }) {
    const key = JSON.parse(value).title;
    sessionStorage.setItem(key, value);
  }

  resetCanCreatePE() {
    this.setState({
      email: '',
      textArea: '',
      rating: 1,
      canCreatePE: false,
    });
    // this.setState({ canCreatePE: false });
  }

  render() {
    const { title, thumbnail, price, email, textArea, rating, canCreatePE } = this.state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <h3>{price}</h3>
        <img src={ thumbnail } alt={ title } />
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
            rating={ 1 }
            onRate={ (event) => {
              console.log(event.rating);
              this.retrieveRating(event);
              // Resolver problema das estrelas por causa da chamada da função acima
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
          <input type="submit" value="Avaliar" onClick={ this.handleSubmit } />
        </form>
        {
          canCreatePE
            ? (
              <ProductEvaluation
                email={ email }
                textArea={ textArea }
                rating={ rating }
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
