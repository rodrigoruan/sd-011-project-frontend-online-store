import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFound from './NotFound';

class Products extends Component {
  constructor() {
    super();

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

    this.addProductToCart = this.addProductToCart.bind(this);
    this.setShoppingCartToLocalStorage = this.setShoppingCartToLocalStorage.bind(this);
  }

  setShoppingCartToLocalStorage() {
    const { shoppingCart } = this.state;

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }

  addProductToCart(item) {
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
    const { prodList } = this.props;
    if (prodList.length === 0) {
      return <NotFound />;
    }
    return (
      <div>
        { prodList.map((item) => (
          // Como enviar um objeto pelo Link -> https://reactrouter.com/web/api/Link
          <div data-testid="product" key={ item.id }>
            <Link
              data-testid="product-detail-link"
              key={ item.id }
              to={ {
                pathname: `/product-detail/${item.id}`,
                state: { item: [item] },
              } }
            >
              <h1>{item.title}</h1>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{`R$: ${item.price}`}</p>
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => this.addProductToCart(item) }
            >
              Comprar
            </button>
          </div>
        ))}
      </div>

    );
  }
}

Products.propTypes = {
  prodList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default Products;
