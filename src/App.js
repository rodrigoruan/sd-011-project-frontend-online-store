import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopCart: [],
    };
    this.handleAddToShopCart = this.handleAddToShopCart.bind(this);
  }

  handleAddToShopCart(title, thumbnail, price) {
    this.setState((state) => ({
      shopCart: [...state.shopCart, { title, thumbnail, price, amount: 0 }],
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route path="/details" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
