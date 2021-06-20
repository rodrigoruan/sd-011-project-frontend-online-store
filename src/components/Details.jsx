import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AvaliationForm from './AvaliationForm';
import Avaliations from './Avaliations';
import handleCart from '../services/localStorage';

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
    const { title, price, thumbnail, attributes } = element;
    const { cart } = this.state;
    return (
      <div>
        <div>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            Carrinho
            <span data-testid="shopping-cart-size">{ cart }</span>
          </Link>
        </div>
        <div>
          <div>
            <span data-testid="product-detail-name">{`${title}, ${price}`}</span>
          </div>
          <div>
            <img src={ thumbnail } alt={ title } />
          </div>
          <div>
            <h3>Especificações técnicas</h3>
            { attributes.map(({ name, value_name: valueName, id: attributeId }) => (
              <p key={ attributeId }>
                { name }
                :
                { valueName }
              </p>
            ))}
          </div>
          <div>
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => this.addQuantity(element) }
            >
              Adicionar ao carrinho
            </button>
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
        attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
