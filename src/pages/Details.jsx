import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToCartButton from '../components/AddToCartButton';
import Rating from '../components/Rating';

class Details extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { location } = this.props;
    this.inputHandler = this.inputHandler.bind(this);
    this.renderRating = this.renderRating.bind(this);
    this.state = {
      productId: match.params.id,
      productDetails: location.aboutProps,
      email: '',
      message: '',
      rating: 0,
      showForm: false,
    };
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
    const { productDetails, productId, email, message, rating, showForm } = this.state;
    const { price, image, title, addCartFunction } = productDetails;
    return (
      <div>
        <img src={ image } alt={ title } />
        <p data-testid="product-detail-name">{title}</p>
        <p>{`R$: ${price}`}</p>
        <div data-testid="product-detail-add-to-cart">
          <AddToCartButton
            id={ productId }
            addCart={ addCartFunction }
            title={ title }
            price={ price }
          />
        </div>
        <Link
          to={ {
            pathname: '/cart',
            aboutProps: {
              itensCarrinho: [productDetails],
            },
          } }
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
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

Details.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default Details;
