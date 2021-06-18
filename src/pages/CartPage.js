import React, { Component } from 'react';
import CardCart from '../components/CardCart';
import EmptyCart from '../components/EmptyCart';

class cartPage extends Component {
  render() {
    const newArray = JSON.parse(localStorage.getItem('products') || '[]');
    return (
      <div data-testid="shopping-cart-empty-message">
        {newArray.length > 0 ? <CardCart /> : <EmptyCart />}
      </div>
    );
  }
}

export default cartPage;
