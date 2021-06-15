import React from 'react';
import './App.css';
// import * as api from './services/api';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPageHome from './components/SearchPageHome';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ SearchPageHome } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
