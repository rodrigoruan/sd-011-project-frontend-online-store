import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ShoppingCart from './page/ShoppingCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Header } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
