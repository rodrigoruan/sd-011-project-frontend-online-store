import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './page/Header';
import ShoppingCart from './page/ShoppingCart';
import CategorieNav from './page/CategorieNav';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Header } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/categorie-nav" component={ CategorieNav } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
