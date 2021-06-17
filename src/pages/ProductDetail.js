import React, { Component } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
// import CustomerRatingForm from '../components/CustomerRatingForm';
=======
import CartButton from '../components/CartButton';
>>>>>>> c23f619ca5f457f7ed9769459bcad4d15e8326f8

class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      comment: '',
      rating: 1,
      counter: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitRating = this.submitRating.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  async submitRating() {
    await this.setState((state) => ({
      counter: state.counter + 1,
    }));
    const { counter } = this.state;
    // const commentList = [{ email, comment, rating, counter }];
    localStorage.setItem(counter, JSON.stringify(this.state));
  }

  render() {
    const {
      location:
      // { state:
      //   { produto:
      //     { condition, price, thumbnail, title } } } } = this.props;
    // const { email, comment, rating, counter } = this.state;
    // const storedRatings = JSON.parse(localStorage.getItem(counter));
    // console.log(storedRatings);
        { state:
          { produto, addToCart } } } = this.props;
    const { condition, price, thumbnail, title } = produto;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <h2>{ price }</h2>
        <img src={ thumbnail } alt={ `imagem de ${title}` } />
        <p>{ condition }</p>
        {/* <form>
          <h2>Avaliações</h2>
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={ this.handleChange }
            value={ email }
          />
          <input
            name="rating"
            type="range"
            min="1"
            max="5"
            onChange={ this.handleChange }
            value={ rating }
          />
          <textarea
            name="comment"
            placeholder="Mensagem (Opcional)"
            data-testid="product-detail-evaluation"
            onChange={ this.handleChange }
            value={ comment }
          />
          <button
            type="submit"
            onClick={ this.submitRating }
          >
            Add comentário
          </button>
        </form> */}
        {/* { storedRatings.map(({ email: emailField, comment: commentField, rating: ratingField, counter: counterField }) => (
          <div key={ counterField }>
            <h3>{ emailField }</h3>
            <h4>{ commentField }</h4>
            <p>{ ratingField }</p>
          </div>
        )) } */}
        <button
          type="button"
          onClick={ () => {
            const addedCart = [...addToCart, produto];
            localStorage.setItem('addingCart', JSON.stringify(addedCart));
          } }
          data-testid="product-detail-add-to-cart"
        >
          Adicione ao carrinho
        </button>
        <CartButton
          link={ {
            pathname: '/cart',
            state: { cart: addToCart },
          } }
        />
          <input type="text" />
          <textarea type="text" data-testid="product-detail-evaluation" />
      </div>
    );
  }
}

export default ProductDetail;

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      addToCart: PropTypes.arrayOf(PropTypes.object),
      produto: PropTypes.shape({
        condition: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};
