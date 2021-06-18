import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCartCard extends Component {
  constructor(props) {
    super(props);

    let { quantity, available_quantity: qt } = this.props;

    this.state = {
      quantity,
      disabled: false,
    };

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.removeProductFunction = this.removeProductFunction.bind(this);
    this.handleQuant = this.handleQuant.bind(this);
  }

  increaseQuantity() {
    let { quantity } = this.state;
    const { available_quantity: qt } = this.props;
    const incrementQuantity = quantity + 1;
    const storageData = JSON.parse(localStorage.getItem('products'));
    const quantityTotal = parseInt(localStorage.getItem('quantidade'));
    const { index } = this.props;
    this.setState({quantity: incrementQuantity});

    storageData[index].quantity = incrementQuantity;
    localStorage.setItem('products', JSON.stringify(storageData));
    localStorage.setItem('quantidade', quantityTotal + 1);

    if (qt > quantity) {
      this.handleQuant();
    }
    console.log(qt)
  }

  handleQuant() {
    this.setState({ disabled: true });
  }

  decreaseQuantity() {
    let { quantity } = this.state;
    const decrementQuantity = quantity - 1;
    const storageData = JSON.parse(localStorage.getItem('products'));
    const quantityTotal = parseInt(localStorage.getItem('quantidade'));
    const { index } = this.props;
    this.setState({quantity: decrementQuantity});

    storageData[index].quantity = decrementQuantity;
    localStorage.setItem('products', JSON.stringify(storageData));
    localStorage.setItem('quantidade', quantityTotal - 1);
  }

  removeProductFunction() {
    const { removeProduct, index } = this.props;
    const storageData = JSON.parse(localStorage.getItem('products'));
    
    removeProduct(storageData[index]);
  }

  render() {
    const { title, price, id, imgPath } = this.props;
    const { quantity, disabled } = this.state;
    return (
      <div key={ id }>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ imgPath } alt={ title } />
        <p>
          R$
          { price }
        </p>
        <p>
          Quantidade:{' '}
          <span data-testid="shopping-cart-product-quantity">{quantity}</span>
          <span>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ this.increaseQuantity }
              disabled={ disabled }
            >
              +
            </button>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ this.decreaseQuantity }
            >
              -
            </button>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ this.removeProductFunction }
            >
              X
            </button>
          </span>
        </p>
      </div>
    );
  }
}

export default ProductCartCard;

ProductCartCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
