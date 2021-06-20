import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Details from './components/Details';
import Checkout from './components/Checkout';
import CheckoutSuccessful from './components/CheckoutSuccessful';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route path="/Details/:id" component={ Details } />
          <Route path="/Checkout" component={ Checkout } />
          <Route path="/CheckoutSuccessful" component={ CheckoutSuccessful } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
