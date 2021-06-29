import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardCart from '../components/CardCart';
import EmptyCart from '../components/EmptyCart';

class cartPage extends Component {
  render() {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    return (
      <div data-testid="shopping-cart-empty-message">
        {
          products.length > 0
            ?
              <div>
                 <Link to="/checkout" data-testid="checkout-products">Checkout</Link>
                 <CardCart products={ products } />
              </div>
            : <EmptyCart />
        }
      </div>
    );
  }
}

export default cartPage;
