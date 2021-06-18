import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AddCarrinho } from './index';

class ProductDetailCard extends Component {
  constructor() {
    super();

    this.state = {
      quantityTotal: 0,
      quantityTotalInitial: 0,
    };

    this.manipulateState = this.manipulateState.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  componentDidMount() {
    this.updateQuantity();
  }

  updateQuantity() {
    const qttTotalStorage = parseInt(localStorage.getItem('quantidade'), 10);
    this.setState({
      quantityTotalInitial: qttTotalStorage,
    });
  }

  manipulateState(quantityTotal) {
    this.setState({
      quantityTotal,
    });
  }

  render() {
    const { title, imgPath, price, id } = this.props;
    const { quantityTotalInitial, quantityTotal } = this.state;

    return (
      <div>
        <div>
          <Link
            to="/shoppingCart"
            alt="shopping-cart"
            data-testid="shopping-cart-button"
          >
            carrinho

          </Link>
          <span data-testid="shopping-cart-size">
            { (quantityTotalInitial > quantityTotal
              ? quantityTotalInitial
              : quantityTotal) }
          </span>
        </div>
        <div data-testid="product">
          <h3 data-testid="product-detail-name">{title}</h3>
          <img src={ imgPath } alt={ title } />
          <p>{price}</p>
        </div>
        <AddCarrinho
          testId="product-detail-add-to-cart"
          title={ title }
          price={ price }
          id={ id }
          manipulateState={ this.manipulateState }
        />
      </div>
    );
  }
}

export default ProductDetailCard;

ProductDetailCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
