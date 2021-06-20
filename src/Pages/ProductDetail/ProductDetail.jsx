import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from '../Rating';
import './productDetail.css';

// import * as api from '../../services/api';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (!shoppingCart) {
      this.state = {
        shoppingCart: [],
      };
    } else {
      this.state = {
        shoppingCart,
      };
    }

    this.getApiProducts = this.getApiProducts.bind(this);
    this.setShoppingCartToLocalStorage = this.setShoppingCartToLocalStorage.bind(this);
  }

  setShoppingCartToLocalStorage() {
    const { shoppingCart } = this.state;
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }

  getApiProducts(item) {
    const { shoppingCart } = this.state;

    if (shoppingCart.some((productItem) => productItem.productId === item.id)) {
      shoppingCart.find((productItem) => productItem.productId === item.id).quantity += 1;

      this.setState({
        shoppingCart,
      },
      async () => this.setShoppingCartToLocalStorage());
    } else {
      const productInfo = {
        quantity: 1,
        productId: item.id,
        productInfo: [item],
      };
      this.setState((prevState) => ({
        shoppingCart: [...prevState.shoppingCart, productInfo],
      }),
      async () => this.setShoppingCartToLocalStorage());
    }
  }

  render() {
    const { shoppingCarts } = this.state;
    console.log(shoppingCarts);
    const {
      location:
      { state:
        { item },
      },
    } = this.props;
    return (
      <>
        <div className="product-details-header">
          <Link to="/">
            <img
              src="/imgs/return.png"
              alt="Shopping-cart-button"
              width="25px"
            />
          </Link>
          <Link
            data-testid="shopping-cart-button"
            to="/shoppingcart"
          >
            <img
              src="/imgs/shopping-cart.png"
              alt="Shopping-cart-button"
              width="25px"
            />
          </Link>
        </div>
        {item.map((info) => (
          <div className="product-info" key={ info.id }>
            <div className="main-product-info">
              <h1 data-testid="product-detail-name">
                {info.title}
              </h1>
              <h1>
                -
              </h1>
              <h1>
                { `R$: ${info.price}` }
              </h1>
            </div>
            <div className="product-details">
              <img className="product-img" src={ info.pictures[0].url } alt={ info.title } />
              <div className="product-description">
                <h1>
                  Descrição do Produto:
                </h1>
                { info.attributes.map((attributes) => (
                  <p key={ attributes.id }>
                    <span>
                      { attributes.name }
                      :
                    </span>
                    { attributes.value_name }
                  </p>
                ))}
              </div>
            </div>
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => this.getApiProducts(info) }
            >
              Colocar no carrinho
            </button>

            <Rating />
          </div>
        ))}
      </>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default ProductDetail;
