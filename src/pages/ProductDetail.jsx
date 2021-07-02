import React, { Component } from 'react';
import Rater from 'react-rater';
// All credits of Rater to https://reactjsexample.com/a-star-rater-in-react-js/
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductEvaluation from '../components/ProductEvaluation';
import 'react-rater/lib/react-rater.css';

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

    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <p data-testid="shopping-cart-size">
          {itemQuantity}
        </p>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <h3>{price}</h3>
        <img src={ thumbnail } alt={ title } />
        {hasFreeShipping ? <h4 data-testid="free-shipping">Frete Grátis</h4> : null}
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          disabled={ inStorage <= itemQuantity }
          onClick={ () => add(value) }
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
          localStorage.getItem(id)
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
