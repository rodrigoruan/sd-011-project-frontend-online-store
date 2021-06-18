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
    const {
      thumbnail,
      title,
      price,
      shipping: { free_shipping: freeShipping } } = listProduct;
    const shipping = freeShipping ? (<p data-testid="free-shipping">Frete Grátis</p>)
      : '';
    return !redirect ? (
      <div className="card" data-testid="product">
        <div className="title">
          { title }
        </div>
        <img className="img" src={ thumbnail } alt={ title } />
        <div className="buttons-container">
          <div className="price">
            R$
            {' '}
            { price }
          </div>
          <button
            type="button"
            onClick={ this.setStorage }
            data-testid="product-detail-link"
            id="details-button"
          >
            Ver mais
          </button>
          <button
            onClick={ () => onClick(listProduct) }
            type="button"
            data-testid="product-add-to-cart"
            id="add-to-cart-button"
          >
            Adicionar ao carrinho
          </button>
          { shipping }
        </div>
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
