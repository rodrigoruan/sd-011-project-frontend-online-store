import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductsList } />
        <Route exact path="/shoppingcart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
