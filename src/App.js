import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Páginas
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout'
// Componentes
import CategoryFilter from './components/CategoryFilter';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/shoppingcart" component={ ShoppingCart } />
        <Route exact path="/categoryfilter" component={ CategoryFilter } />
        <Route exact path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
