import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Product from './components/Product';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
        <Route path="/produtos/:id" render={ (props) => <Product { ...props } /> } />
        <Route path="/checkout" render={ (props) => <Checkout { ...props } /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
