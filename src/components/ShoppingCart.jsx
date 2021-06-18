import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartItem from './ShoppingCartItem';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: [
        {
          id: 'teste1',
          title: 'title teste1',
          thumbnail: 'teste1',
          quantity: 1,
          price: 10,
        },
        {
          id: 'teste2',
          title: 'title teste2',
          thumbnail: 'teste2',
          quantity: 1,
          price: 3,
        },
      ],
      totalShoppingCart: 0,
    };
    this.deletProduct = this.deletProduct.bind(this);
    this.updatedProduct = this.updatedProduct.bind(this);
    this.totalShoppingCart = this.totalShoppingCart.bind(this);
  }

  componentDidMount() {
    this.totalShoppingCart();
  }

  deletProduct(id) {
    const { shoppingCart } = this.state;
    const actualArrayProducts = shoppingCart;
    const newArrayProducts = actualArrayProducts.filter((product) => product.id !== id);
    this.setState({
      shoppingCart: [...newArrayProducts],
    });
  }

  updatedProduct({ ...productUpdated }) {
    console.log(productUpdated);
    const { shoppingCart } = this.state;
    const newShoppincart = shoppingCart.map((product) => {
      if (product.id === productUpdated.id) {
        return { ...product, ...productUpdated };
      }
      return product;
    });
    this.setState({
      shoppingCart: [...newShoppincart],
    });
    this.totalShoppingCart();
  }

  totalShoppingCart() {
    this.setState({
      totalShoppingCart: 0,
    }, () => {
      const { shoppingCart } = this.state;
      const totalSumPrices = shoppingCart.reduce(
        (acc, total) => acc + (total.quantity * total.price), 0,
      );
      this.setState({
        totalShoppingCart: totalSumPrices,
      });
    });
  }

  render() {
    const { shoppingCart, totalShoppingCart } = this.state;
    return (
      <div className="shopping-cart-page">
        <div className="button-back">
          <Link to="/">Voltar</Link>
        </div>
        <div className="page-title">
          <h2>Carrinho de Compras</h2>
        </div>
        <div className="shopping-cart-products-list">
          { shoppingCart.map((product) => (
            <ShoppingCartItem
              key={ product.id }
              item={ product }
              deletProduct={ this.deletProduct }
              updatedProduct={ this.updatedProduct }
            />)) }
        </div>
        <div className="total-shopping-cart-section">
          <p className="total-shopping-cart">
            R$
            { totalShoppingCart }
          </p>
        </div>
      </div>
    );
  }
}
