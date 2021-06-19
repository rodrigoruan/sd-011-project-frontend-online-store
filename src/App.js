import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import { Checkout } from './Components/Checkout';
import { Product } from './Components/Product';
import Home from './Components/Home';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ShoppingCart />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart" component={ Cart } />
          <Route path="/product/:id" render={ (props) => <Product { ...props } /> } />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
