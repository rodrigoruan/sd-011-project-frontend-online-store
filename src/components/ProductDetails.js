import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../css/Products.css';
import CartIcon from '../img/shopping-cart-solid.svg';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      rating: 0,
      showForm: false,
      counter: 1,
      sum: 0,
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.renderRating = this.renderRating.bind(this);
  }

  componentDidMount() {
    this.sumCartItems();
    this.changeState();
  }

  changeState = () => {
    const { location: { state } } = this.props;
    const { title } = state;

    const local = JSON.parse(localStorage.getItem(title));
    if (local) {
      this.setState({ counter: local.counter + 1 });
    }
  };

  handleClick = () => {
    const { location: { state } } = this.props;
    const { location: { state: { title } } } = this.props;
    const { counter } = this.state;
    const local = JSON.parse(localStorage.getItem(title));

    this.setState((previous) => ({ counter: previous.counter + 1 }));

    if (local) {
      local.counter = counter;
      localStorage.setItem(title, JSON.stringify(local));
    } else {
      const object = { ...state, counter };
      localStorage.setItem(title, JSON.stringify(object));
    }

    this.sumCartItems();
  };

  sumCartItems = () => {
    const storage = { ...localStorage };
    const response = Object.values(storage).map((e) => JSON.parse(e));
    const total = response.reduce((acc, curr) => acc + curr.counter, 0);
    this.setState({ sum: total });
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
    const { location: { state: { title, thumbnail, price, attributes } } } = this.props;
    const { email, message, rating, showForm, sum } = this.state;
    return (
      <>
        <div className="cart-screen">
          <span data-testid="shopping-cart-size">{ sum }</span>
          <Link
            data-testid="shopping-cart-button"
            to="/cart"
          >
            <button
              type="button"
              className="cart-scree"
            >
              <img src={ CartIcon } alt="" width="20" />
            </button>
          </Link>
        </div>
        <div className="name-item-detais">
          <h3 data-testid="product-detail-name">{title}</h3>
          <p>{ `R$ ${price.toLocaleString('pt-BR')}` }</p>
        </div>
        <div className="product-detail">
          <img src={ thumbnail } alt={ title } className="img-details" />
          <ul>
            {attributes && attributes
              .map((item, index) => (
                <li key={ index }>
                  {item.name}
                  :
                  {' '}
                  {item.value_name}
                </li>
              ))}
          </ul>
        </div>
        <button
          type="button"
          className="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
        <form className="form">
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
      </>
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
