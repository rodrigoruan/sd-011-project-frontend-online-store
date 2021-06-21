import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating';
import './productDetail.css';
import ShoppingCartBtn from '../../components/ShoppingCartBtn';

// import * as api from '../../services/api';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

    if (shoppingCart) {
      this.state = {
        shoppingCart,
        shoppingCartItens: shoppingCart.reduce(((acc, curr) => acc + curr.quantity), 0),
      };
    } else {
      this.state = {
        shoppingCart: [],
        shoppingCartItens: 0,
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

      this.setState((prevState) => ({
        shoppingCart,
        shoppingCartItens: prevState.shoppingCartItens + 1,
      }),
      async () => this.setShoppingCartToLocalStorage());
    } else {
      const productInfo = {
        quantity: 1,
        productId: item.id,
        productInfo: [item],
      };
      this.setState((prevState) => ({
        shoppingCart: [...prevState.shoppingCart, productInfo],
        shoppingCartItens: prevState.shoppingCartItens + 1,
      }),
      async () => this.setShoppingCartToLocalStorage());
    }
  }

  render() {
    const { shoppingCartItens } = this.state;

    const {
      location:
      { state:
        { item },
      },
    } = this.props;

    return (
      <>
        {item.map((info) => (
          <div key={ info.id }>
            <ShoppingCartBtn shoppingCartItens={ shoppingCartItens } />
            <div className="main-product-info">
              <h1 data-testid="product-detail-name">{info.title}</h1>
              <h1>{ `R$: ${info.price}` }</h1>
            </div>
            <div className="product-details">
              <img className="product-img" src={ info.thumbnail } alt={ info.title } />
              <div>
                { info.attributes.map((attributes) => (
                  <p key={ attributes.id }>
                    { `${attributes.name}: ${attributes.value_name}` }
                  </p>
                ))}
              </div>
            </div>
            { (info.shipping.free_shipping)
              ? <p data-testid="free-shipping">Frete Grátis</p>
              : null }
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
