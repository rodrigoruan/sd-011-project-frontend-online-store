import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// teste

class CardProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };

    this.setStorage = this.setStorage.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  setStorage() {
    const { listProduct } = this.props;
    sessionStorage.setItem('product', JSON.stringify(listProduct));
    this.setRedirect();
  }

  setRedirect() {
    this.setState(() => ({
      redirect: true,
    }));
  }

  render() {
    const { redirect } = this.state;
    const { listProduct, onClick } = this.props;
    const { thumbnail, title, price } = listProduct;
    return !redirect ? (
      <div data-testid="product">
        { title }
        <img src={ thumbnail } alt={ title } />
        { price }
        <button
          type="button"
          onClick={ this.setStorage }
          data-testid="product-detail-link"
        >
          Detalhes
        </button>
        <button
          onClick={ () => onClick(listProduct) }
          type="button"
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    ) : (<Redirect to="/product" />);
  }
}

CardProduct.propTypes = {
  listProduct: PropTypes.shape(PropTypes.arrayOf({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardProduct;
