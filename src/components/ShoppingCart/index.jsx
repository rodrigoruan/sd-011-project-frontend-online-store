import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';
import EmptyCartLine from './EmptyCartLine';
import ProductInCart from './ProductInCart';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.storageCartItem = this.storageCartItem.bind(this);
  }

  componentDidMount() {
    this.storageCartItem();
  }

  storageCartItem() {
    const items = { ...localStorage };
    const cartItems = Object.values(items).map((item) => JSON.parse(item));
    this.setState({
      items: cartItems,
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <header className="cartHeader">
          <Link to="/" className="LinkBack">Voltar</Link>
        </header>
        {items.length === 0 ? <EmptyCartLine /> : <ProductInCart items={ items } />}
      </div>
    );
  }
}
