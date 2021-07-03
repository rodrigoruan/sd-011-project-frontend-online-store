import React, { Component } from 'react';
import Rater from 'react-rater';
// All credits of Rater to https://reactjsexample.com/a-star-rater-in-react-js/
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductEvaluation from '../components/ProductEvaluation';
import 'react-rater/lib/react-rater.css';
import 'bulma/css/bulma.min.css';
import '../styles/ProductDetail.css';

import { addToCart } from '../actions';

class ProductDetail extends Component {
  constructor({ location }) {
    super({ location });

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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { email, textArea, rating, id } = this.state;
    const data = JSON.parse(localStorage.getItem(id)) || [];
    const evaluations = JSON.stringify([...data, { email, textArea, rating }]);
    localStorage.setItem(id, evaluations);
    this.setState({
      email: '',
      textArea: '',
      rating: 1,
    });
  }

  retrieveRating(event) {
    this.setState({ rating: event.rating });
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
      hasFreeShipping,
    } = this.state;

    const { cartList, add } = this.props;

    const value = { id, title, thumbnail, price, inStorage };

    const item = cartList.find((cartItem) => cartItem.id === id);
    const itemQuantity = item ? item.quantity : 0;

    const showEvaluations = localStorage.getItem(id);

    return (
      <div>
        <div
          className="navbar-product-details"
        >
          <Link
            to="/"
            className="button is-danger navbar-product-details-btn"
          >
            Voltar
          </Link>
          <p
            className="is-warning navbar-product-details-btn"
            data-testid="shopping-cart-size"
          >
            {`Produtos no Carrinho:${itemQuantity}`}
          </p>
          <Link
            to="/cart"
            className="button is-info navbar-product-details-btn"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
        </div>
        <div className="center box">
          <h3 data-testid="product-detail-name">{ title }</h3>
          <h3>{`R$${price.toFixed(2)}`}</h3>
          <img src={ thumbnail } alt={ title } width="250px" height="250px" />
          {hasFreeShipping ? <h4 data-testid="free-shipping">Frete Grátis</h4> : null}
          <br />
          <button
            type="button"
            className="button is-success"
            data-testid="product-detail-add-to-cart"
            disabled={ inStorage <= itemQuantity }
            onClick={ () => add(value) }
          >
            Adicionar ao carrinho
          </button>
        </div>
        <form className="box field">
          <div>
            <label htmlFor="email">
              <p className="pb-2">Email:</p>
              <input
                className="input is-info"
                type="text"
                name="email"
                value={ email }
                onChange={ this.handleChange }
                required
                placeholder="Obrigatório"
              />
            </label>
          </div>
          <div>
            <p className="pt-4">Avaliação:</p>
            <Rater
              total={ 5 }
              rating={ rating }
              onRate={ (event) => {
                this.retrieveRating(event);
              } }
            />
          </div>
          <div>
            <label htmlFor="commentary">
              <br />
              <p className="pb-2">Comentários:</p>
              <textarea
                className="textarea is-info"
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
          </div>
          <input
            className="center button is-info is-outlined"
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

const mapStateToProps = (state) => ({
  cartList: state.cartReducer.cartList,
});

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addToCart(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

ProductDetail.propTypes = {
  location: PropTypes.object,
  cartList: PropTypes.shape,
  add: PropTypes.func,
}.isRequired;
