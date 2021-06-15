import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CartItems from './components/CartItems';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ SearchBar } />
        <Route exact path="/cartItems" component={ CartItems } />
      </BrowserRouter>
    );
  }
}
