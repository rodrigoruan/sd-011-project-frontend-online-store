import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import CategoryFilter from './pages/CategoryFilter';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/shoppingcart" component={ ShoppingCart } />
        <Route exact path="/categoryfilter" component={ CategoryFilter } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
