import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.setItemStorage = this.setItemStorage.bind(this);
  }

  componentDidMount() {
    const productInfo = JSON.parse(localStorage.getItem('productInfos'));
    if (!productInfo) {
      localStorage.setItem('productInfos', JSON.stringify([]));
    }
  }

  setItemStorage() {
    const productInfo = JSON.parse(localStorage.getItem('productInfos'));
    const { location: { state: { id, title, thumbnail, price } } } = this.props;
    productInfo.push({
      id,
      title,
      thumbnail,
      price,
    });
    console.log(productInfo);
    localStorage.setItem('productInfos', JSON.stringify(productInfo));
  }

  render() {
    const { location: { state: { title, thumbnail, price } } } = this.props;

    return (
      <div>
        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
        <h4 data-testid="product-detail-name">{title}</h4>
        <img src={ thumbnail } alt={ title } />
        <span>
          R$
          { price }
        </span>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.setItemStorage }
        >
          Adicionar ao carrinho
        </button>
      </div>
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
