import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './page/MainPage';
import ShoppingCart from './page/ShoppingCart';
import CategorieNav from './page/CategorieNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/categorie-nav" component={ CategorieNav } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
