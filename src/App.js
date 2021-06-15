import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as api from './services/api';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  api.getProductsFromCategoryAndQuery('MLB1055', 'celular');
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
