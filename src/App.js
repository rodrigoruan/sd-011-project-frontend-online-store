import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';


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
