import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CartItems from './components/CartItems';
import Details from './components/Details';
import Home from './components/Home';
import Checkout from './components/Checkout';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cartitems" component={ CartItems } />
        <Route path="/checkout" render={ (props) => <Checkout { ...props } /> } />
        <Route path="/details/:id" render={ (props) => <Details { ...props } /> } />
      </BrowserRouter>
    );
  }
}
