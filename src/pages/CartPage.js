import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardCart from '../components/CardCart';
import EmptyCart from '../components/EmptyCart';
import style from './CartPage.module.css';

class cartPage extends Component {
  render() {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    return (
      <div className={ style.container } data-testid="shopping-cart-empty-message">
        {
          products.length > 0
            ? (
              <div className={ style.cart }>
                <CardCart products={ products } />
                <Link to="/checkout" data-testid="checkout-products">Checkout</Link>
              </div>
            )
            : <EmptyCart />
        }
      </div>
    );
  }
}

export default cartPage;
