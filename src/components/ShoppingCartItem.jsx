import React, { Component } from 'react';
import '../styles/ShoppingCartItem.css';
import PropTypes from 'prop-types';

export default class ShoppingCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.item.id,
      title: props.item.title,
      thumbnail: props.item.thumbnail,
      quantity: props.item.quantity,
      price: props.item.price,
      totalPrice: props.item.price,
      buttonIncrease: false,
      availableQuantity: props.item.available_quantity,
    };

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.updatePriceAndProduct = this.updatePriceAndProduct.bind(this);
    this.checkQuantity = this.checkQuantity.bind(this);
  }

  componentDidMount() {
    this.checkQuantity();
  }

  handleIncrease() {
    const { quantity, availableQuantity } = this.state;
    if (quantity === availableQuantity) {
      this.setState({ buttonIncrease: true });
    } else {
      this.setState({
        quantity: quantity + 1,
      }, () => {
        this.updatePriceAndProduct();
      });
    }
  }

  handleDecrease() {
    const { quantity } = this.state;
    if (quantity > 0) {
      this.setState({
        quantity: quantity - 1,
        buttonIncrease: false,
      }, () => {
        this.updatePriceAndProduct();
      });
    }
  }

  checkQuantity() {
    const { quantity, availableQuantity } = this.state;
    if (quantity === availableQuantity) {
      this.setState({ buttonIncrease: true });
    }
  }

  updatePriceAndProduct() {
    const { id, title, thumbnail, quantity, price } = this.state;
    const { updatedProduct } = this.props;
    this.totalPrice();
    updatedProduct({ id, title, thumbnail, quantity, price });
  }

  totalPrice() {
    const { quantity, price } = this.state;
    const newTotalPrice = quantity * price;
    this.setState({
      totalPrice: newTotalPrice,
    });
  }

  render() {
    const { id, title, thumbnail, quantity, totalPrice, buttonIncrease } = this.state;
    const { deletProduct } = this.props;
    return (
      <div className="shopping-cart-item-section">
        <button
          type="button"
          onClick={ () => deletProduct(id) }
          className="delet-product"
        >
          X
        </button>
        <img className="image-product" src={ thumbnail } alt={ title } />
        <span
          className="title-product"
          data-testid="shopping-cart-product-name"
        >
          { title }
        </span>
        <button
          className="button-quantity"
          type="button"
          onClick={ this.handleDecrease }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <p
          className="quantity-producty"
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </p>
        <button
          className="button-quantity"
          type="button"
          onClick={ this.handleIncrease }
          data-testid="product-increase-quantity"
          disabled={ buttonIncrease }
        >
          +
        </button>
        <p className="price-product">
          R$
          { totalPrice }
        </p>
      </div>
    );
  }
}

ShoppingCartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    available_quantity: PropTypes.number.isRequired,
  }).isRequired,
  updatedProduct: PropTypes.func.isRequired,
  deletProduct: PropTypes.func.isRequired,
};
