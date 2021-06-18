import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartSize from '../Components/ShoppingCartSize';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { location: { state } } = this.props;
    console.log(state);
    this.state = {
      redirect: false,
      product: {},
      cartProducts: state,
    };

    this.setProduct = this.setProduct.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  componentDidMount() {
    const product = JSON.parse(sessionStorage.getItem('product'));
    if (!product) this.setRedirect();
    this.setProduct(product);
  }

  setProduct(product) {
    this.setState(() => ({
      product,
    }));
  }

  setRedirect() {
    this.setState(() => ({
      redirect: true,
    }));
  }

  addCart(product) {
    this.setState((old) => ({
      cartProducts: [...old.cartProducts, product],
    }));
  }

  render() {
    const { redirect, product, cartProducts } = this.state;
    const {
      title,
      thumbnail,
      price,
      shipping,
    } = product;
    let freeShipping = false;

    if (shipping) freeShipping = shipping.free_shipping;
    const shippingAlert = freeShipping ? (<p data-testid="free-shipping">Frete Grátis</p>)
      : '';

    return !redirect ? (
      <div className="details-container">
        <header className="header">
          <Link
            to={ { pathname: '/' } }
          >
            <h1 className="logo" data-testid="home-initial-message">
              G16 Store
            </h1>
          </Link>
          <Link
            to={ { pathname: '/shopcart', state: cartProducts } }
          >
            <button className="shopping" type="button">
              <img src="https://image.flaticon.com/icons/png/512/263/263142.png" alt="a" />
              <ShoppingCartSize shop={ cartProducts.length } />
            </button>
          </Link>
        </header>
        <div className="card">
          <div className="title">
            <p data-testid="product-detail-name">{ title }</p>
          </div>
          <img className="img" src={ thumbnail } alt={ title } />
          <div className="price">
            R$
            {' '}
            { price }
          </div>
          { shippingAlert }
          <button
            onClick={ () => this.addCart(product) }
            type="button"
            data-testid="product-detail-add-to-cart"
            id="add-to-cart-button-details"
          >
            Adicionar ao carrinho
          </button>
          <Link
            to={ { pathname: '/shopcart', state: cartProducts } }
          >
            <button type="button" data-testid="shopping-cart-button">
              Carrinho de Compras
            </button>
          </Link>
          <form method="GET">
            <input
              className="textarea"
              data-testid="product-detail-evaluation"
              type="textarea"
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    ) : (<Redirect to="/" />);
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf().isRequired,
  }).isRequired,
};

export default ProductDetails;
