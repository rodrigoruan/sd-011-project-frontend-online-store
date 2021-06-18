import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';
import ProductInCart from './ProductInCart';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.getItemFromLocalStorage = this.getItemFromLocalStorage.bind(this);
    this.removeFromArray = this.removeFromArray.bind(this);
  }

  componentDidMount() {
    this.getItemFromLocalStorage();
  }

  getItemFromLocalStorage() {
    const items = { ...localStorage };
    const cartItems = Object.values(items).map((item) => JSON.parse(item));
    this.setState({
      items: cartItems,
    });
  }

  removeFromArray(id) {
    this.setState((pState) => ({
      items: pState.items.filter((item) => item.id !== id),
    }));
    localStorage.removeItem(id);
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <header className="cartHeader">
          <Link to="/" className="LinkBack">Voltar</Link>
        </header>
        <ProductInCart items={ items } removeItem={ this.removeFromArray } />
      </div>
    );
  }
}
