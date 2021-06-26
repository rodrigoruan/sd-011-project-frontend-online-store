import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ProductDetails.module.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import AvaliationForm from '../AvaliationForm/AvaliationForm';

export class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: 0,
      imagePath: '',
      attributes: [],
      id: '',
      availableQuantity: undefined,
      shoppingCart: localStorage.cart ? JSON.parse(localStorage.getItem('cart')) : [],
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.addFirstItemToCart = this.addFirstItemToCart.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.addNewItemToCart = this.addNewItemToCart.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchProductDetails(id);
  }

  handleAddToCart({ thumbnail,
    title,
    price,
    id,
    available_quantity: availableQuantity,
  }) {
    const product = {
      thumbnail,
      title,
      price,
      id,
      quantity: 1,
      availableQuantity,
    };
    const cartDoesNotExists = !localStorage.cart || localStorage.length === 0;
    if (cartDoesNotExists) {
      return this.addFirstItemToCart(product);
    }
    const cart = JSON.parse(localStorage.getItem('cart'));
    const itemExist = cart.findIndex((cartItem) => cartItem.id === product.id) >= 0;
    if (itemExist) {
      return this.increaseQuantity(product);
    }
    return this.addNewItemToCart(product);
  }

  addFirstItemToCart(product) {
    localStorage.setItem('cart', JSON.stringify([product]));
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.setState({ shoppingCart: cart });
  }

  increaseQuantity(product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        const { quantity } = item;
        const newQuantity = quantity + 1;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({ shoppingCart: newCart });
  }

  addNewItemToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({ shoppingCart: newCart });
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
      availableQuantity: details.available_quantity,
    });
  }

  render() {
    const { title,
      price,
      imagePath,
      attributes,
      id,
      availableQuantity,
      shoppingCart } = this.state;
    const product = this.state;
    return (
      <>
        <ShoppingCart cart={ shoppingCart } />
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
          <span>
            Quantidade disponível:
            {' '}
            { availableQuantity }
          </span>
          <br />
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            id={ id }
            onClick={ () => this.handleAddToCart(product) }
          >
            Add to Cart
          </button>
          <div>
            <ul>
              {!attributes && <span />}
              {/* {attributes.map((atribute) => <li key="">{attributes}</li>)} */}
            </ul>
          </div>
          <AvaliationForm />
        </div>
        <span>Direitos reservados.</span>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
