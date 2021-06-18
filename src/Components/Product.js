import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Home.module.css';
import Picture from '../img/shopping-cart.png';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: 0,
      imagePath: '',
      attributes: [],
      eMail: '',
      mensage: '',
      rating: '',
      id: '',
    };
    this.submitButton = this.submitButton.bind(this);
    this.sendProductDetails = this.sendProductDetails.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchProductDetails(id);
  }

  async fetchProductDetails(id) {
    const url = `https://api.mercadolibre.com/items/${id}`;
    const fetchDetails = await fetch(url);
    const details = await fetchDetails.json();
    this.setState({
      title: details.title,
      price: details.price,
      imagePath: details.thumbnail,
      attributes: [],
      id: details.id,
    });
  }

  submitButton() {
    const eMail = document.getElementById('email-id').value;
    const mensage = document.getElementById('mensage-id').value;
    const rating = document.getElementById('rating-id').value;
    this.setState({
      eMail,
      mensage,
      rating,
    });
  }

  async sendProductDetails(object) {
    const response = {
      thumbnail: object.thumbnail,
      title: object.title,
      price: object.price,
      id: object.id,
      quantity: 1,
    };
    let initial = false;
    if (!localStorage.cart) {
      localStorage.setItem('cart', JSON.stringify([response]));
      initial = true;
    }
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    if (cart.length > 0 && initial === false) {
      let equal = false;
      for (let index = 0; index < cart.length; index += 1) {
        if (cart[index].id === response.id) {
          cart[index].quantity += 1;
          equal = true;
          return (cart, equal);
        }
      }
      if (equal === false) {
        cart.push(response);
        console.log(cart);
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    const { title,
      price, imagePath, attributes, eMail, mensage, rating, id } = this.state;
    const product = this.state;
    return (
      <>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <img className={ style.cart } src={ Picture } alt="Carrinho de compras" />
        </Link>
        <div className={ style.product }>
          <h3 data-testid="product-detail-name">{ title }</h3>
          <img src={ imagePath } alt="" />
          <br />
          <span>
            Preço:
            {' '}
            { price }
          </span>
          <br />
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            id={ id }
            onClick={ () => this.sendProductDetails(product) }
          >
            Add to Cart
          </button>
          <div>
            <ul>
              {!attributes && <span />}
              {/* {attributes.map((atribute) => <li key="">{attributes}</li>)} */}
            </ul>
          </div>
          <form>
            <h3>Avaliações</h3>
            <label htmlFor="email-id">
              <p>Email:</p>
              <input
                id="email-id"
                type="e-mail"
                placeholder="Digite seu e-mail"
                isRequired
              />
            </label>
            <label htmlFor="rating-id">
              <p>Estrelas:</p>
              <input
                id="rating-id"
                type="number"
                step={ 0.1 }
                min={ 0 }
                max={ 5 }
                placeholder="0 a 5"
                isRequired
              />
            </label>
            <label htmlFor="mensage-id">
              <p>Mensagem:</p>
              <textarea
                type="text"
                data-testid="product-detail-evaluation"
                id="mensage-id"
              />
            </label>
            <br />
            <button
              onClick={ this.submitButton }
              id="avaiation-button"
              type="button"
            >
              Avaliar
            </button>
          </form>
          <section>
            <h4>Avaliações recentes</h4>
            <h4>
              { eMail }
            </h4>
            <h3>
              { mensage }
            </h3>
            <h3>
              { rating }
            </h3>
          </section>
        </div>
      </>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Product;
