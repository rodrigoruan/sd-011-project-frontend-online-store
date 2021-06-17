import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shopping-cart" component={ Cart } />
        <Route
          exact path="/product-details/:id" component={ ProductDetails }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
