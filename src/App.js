import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Páginas
import Main from './pages/Main';
// Componentes
import ShoppingCart from './pages/ShoppingCart';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

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
