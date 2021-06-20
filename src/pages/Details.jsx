import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AvaliationForm from '../components/AvaliationForm';
import Avaliations from '../components/Avaliations';
import handleCart from '../services/localStorage';
import '../styles/Details.css';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      cart: 0,
    };
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    if (cartItems === null) {
      cartItems = [];
    }
    const result = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    this.setState({
      cart: result,
    });
  }

  addQuantity(product) {
    const quantityProduct = { quantity: 1 };
    const obj = Object.assign(quantityProduct, product);
    handleCart(obj);
  }

  render() {
    const {
      match: { params: { id } },
      location: { state: { element } },
    } = this.props;
    const { title, price, thumbnail, attributes, shipping } = element;
    const { cart } = this.state;
    const { free_shipping: freeShipping } = shipping;
    return (
      <div className="details">
        <div className="detail-buttons">
          <Link to="/">
            <div className="icons">
              <i className="fas fa-arrow-left">Voltar</i>
            </div>
          </Link>
          <Link
            to="/ShoppingCart"
            data-testid="shopping-cart-button"
            className="btn btn-warning"
          >
            <i className="fas fa-shopping-cart" />
            <span className="cart-size" data-testid="shopping-cart-size">
              { cart }
            </span>
          </Link>
        </div>
        <div>
          <div>
            <h3 data-testid="product-detail-name">{`${title}`}</h3>
            {
              freeShipping
                ? <span data-testid="free-shipping">Frete Grátis</span>
                : null
            }
          </div>
          <div className="detail-image-info">
            <div className="detail-image">
              <img src={ thumbnail } alt={ title } />
            </div>
            <div className="detail-information">
              <h3>Especificações técnicas</h3>
              { attributes.map(({ name, value_name: valueName, id: attributeId }) => (
                <p key={ attributeId }>
                  { name }
                  :
                  { valueName }
                </p>
              ))}
              <p className="detail-price">{`R$${price}`}</p>
              <button
                type="button"
                className="btn btn-success"
                data-testid="product-detail-add-to-cart"
                onClick={ () => this.addQuantity(element) }
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>

        <div>
          <AvaliationForm
            getForm={ this.getForm }
            productId={ id }
          />
          <Avaliations
            productId={ id }
          />
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      element: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        shipping: PropTypes.shape({
          free_shipping: PropTypes.bool.isRequired,
        }).isRequired,
        attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
