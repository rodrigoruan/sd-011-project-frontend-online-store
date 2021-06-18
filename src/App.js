import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import { Product } from './Components/Product';
import Home from './Components/Home';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
            <ShoppingCart />
          </Route>
          <Route path="/cart" component={ Cart } />
          <Route path="/product/:id" render={ (props) => <Product { ...props } /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
