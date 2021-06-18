import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPageHome from './components/SearchPageHome';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import Purchase from './components/Purchase';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ SearchPageHome } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
        <Route exact path="/details/:id" component={ ProductDetails } />
        <Route exact path="/checkout" component={ Purchase } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
