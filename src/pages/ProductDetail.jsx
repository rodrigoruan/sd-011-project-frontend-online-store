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
      disabled,
      hasFreeShipping,
    } = this.state;
    const value = { id, title, thumbnail, price, inStorage };
    const { cartList, add } = this.props;
    const cartSize = cartList.filter((item) => item.id === id);
    const showEvaluations = localStorage.getItem(id);
    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <p data-testid="shopping-cart-size">
          {cartSize ? cartSize[0].quantity : 0}
        </p>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <h3>{price}</h3>
        <img src={ thumbnail } alt={ title } />
        {hasFreeShipping ? <h4 data-testid="free-shipping">Frete Grátis</h4> : null}
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          disabled={ disabled }
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
