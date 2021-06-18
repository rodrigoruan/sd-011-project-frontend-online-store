import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProductsInLocalStorage();
  }

  getProductsInLocalStorage = () => {
    const productsInCartString = localStorage.getItem('productsInCart');
    this.setState({
      products: JSON.parse(productsInCartString),
    });
  }

  subtractItem = (id) => {
    const { products } = this.state;
    const newProducts = products.map((product) => {
      if (product.id === id && product.quantity >= 1) {
        product.quantity -= 1;
        return product;
      }
      return product;
    });

    localStorage.setItem('productsInCart', JSON.stringify(newProducts));
    this.setState({
      products: newProducts,
    });
  }

  addItem = (id) => {
    const { products } = this.state;
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.quantity += 1;
        return product;
      }
      return product;
    });

    localStorage.setItem('productsInCart', JSON.stringify(newProducts));
    this.setState({
      products: newProducts,
    });
  }

  renderCartObjects = () => {
    const { products } = this.state;
    const renderCartObjects = products.map((element) => (
      <div key={ element.id }>
        <h3 data-testid="shopping-cart-product-name">{ element.title }</h3>
        <img src={ element.thumbnail } alt={ element } />
        <div>
          <button
            type="button"
          >
            X
          </button>
          <p data-testid="shopping-cart-product-quantity">
            { element.quantity }
          </p>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => this.subtractItem(element.id) }
          >
            -
          </button>
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => this.addItem(element.id) }
          >
            +
          </button>
        </div>
      </div>
    ));
    return renderCartObjects;
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        { products === null
          ? <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
          : this.renderCartObjects() }
        {/* adiciona requisito 12 abaixo ---- */}
        <Link to={ { pathname: '/checkout' } }>
          <button
            data-testid="checkout-products"
            type="button"
          >
            Comprar
          </button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
