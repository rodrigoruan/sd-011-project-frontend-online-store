import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CartItems from './components/CartItems';
import Details from './components/Details';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cartItems" component={ CartItems } />
        <Route path="/details" component={ Details } />
        {/* <Route path="/details/:id" render={ (props) => <Details/> } /> */}
      </BrowserRouter>
    );
  }
}
