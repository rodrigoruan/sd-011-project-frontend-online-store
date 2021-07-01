import React, { Component } from 'react';
import Rater from 'react-rater';
// All credits of Rater to https://reactjsexample.com/a-star-rater-in-react-js/
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductEvaluation from '../components/ProductEvaluation';
import 'react-rater/lib/react-rater.css';
import 'bulma/css/bulma.min.css';
import '../styles/ProductDetail.css';


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

    let disabled = false;
    const item = sessionStorage[location.state.id];
    if (item) {
      const itemObject = JSON.parse(item);
      disabled = itemObject.quantity >= itemObject.inStorage;
    }

    this.state = {
      id: location.state.id,
      price: location.state.price,
      thumbnail: location.state.thumbnail,
      title: location.state.title,
      hasFreeShipping: location.state.hasFreeShipping,
      inStorage: location.state.inStorage,
      email: '',
      textArea: '',
      rating: 1,
      disabled,
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
    const key = data.id;
    if (sessionStorage[key]) {
      const recoveredObject = JSON.parse(sessionStorage[key]);
      const copy = { ...recoveredObject };
      if (copy.quantity < copy.inStorage) {
        copy.quantity += 1;
        sessionStorage[key] = JSON.stringify(copy);
        this.setState((prevState) => ({ cartSize: prevState.cartSize + 1 }));
      } else {
        this.setState({ disabled: true });
      }
    } else {
      sessionStorage.setItem(key, value);
      this.setState((prevState) => ({ cartSize: prevState.cartSize + 1 }));
    }
  }

  render() {
    const {
      id,
      title,
      thumbnail,
      price,
      email,
      textArea,
      rating,
      inStorage,
      disabled,
      cartSize,
      hasFreeShipping,
    } = this.state;
    let freeShipping = null;
    if (hasFreeShipping) freeShipping = 'Frete Grátis';
    const showEvaluations = localStorage.getItem(id) || false;
    return (
      <div >
        <div className="level columns is-mobile is-multiline is-centered is-gapless box is-vcentered">
          <Link to="/" className="level-item has-text-centered button is-danger is-light column box is-vcentered" >Voltar</Link>
          <p className="level-item has-text-centered column box is-vcentered"data-testid="shopping-cart-size"> Produtos no Carrinho:  
            {cartSize}
          </p>
          <Link to="/cart" className="level-item has-text-centered button is-primary is-light column box is-vcentered"   data-testid="shopping-cart-button">Carrinho</Link>
        </div>
        <div className="center box">
        <h3 data-testid="product-detail-name">{ title }</h3>
        <h3>R${price.toFixed(2)}</h3>
        <img src={ thumbnail } alt={ title } width="250px" height="250px"/>
        <h4 data-testid="free-shipping">{ freeShipping }</h4>
        <button
          type="button"
          className="button is-primary"
          data-testid="query-button"
          data-testid="product-detail-add-to-cart"
          disabled={ disabled }
          onClick={ this.addToCart }
          value={ JSON.stringify({
            id,
            title,
            price,
            thumbnail,
            quantity: 1,
            inStorage,
          }) }
        >
          Adicionar ao carrinho
        </button>
        </div>
        <form className="box field" >
          <label htmlFor="email">
            Email: 
            <input
              className="input is-danger"
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
            <br/>
            Comentários:
            <textarea
              className="textarea is-primary"
              name="commentary"
              id=""
              cols="10"
              rows="5"
              value={ textArea }
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
              placeholder="Opcional"
            />
          </label>
          <input className="center button is-danger"
            type="submit"
            value="Avaliar"
            onClick={ this.handleSubmit }
          />
        </form>
        {
          showEvaluations
            ? (
              <ProductEvaluation
                name={ id }
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
