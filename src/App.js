import React from 'react';
import './App.css';
// import * as api from './services/api';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPageHome from './components/SearchPageHome';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ SearchPageHome } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
        <Route exact path="/details/:id" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
