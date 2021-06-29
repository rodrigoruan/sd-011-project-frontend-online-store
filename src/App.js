import React from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import { Cart, Checkout, Home, ProductDetails } from './Components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
        </header>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route
            path="/product/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
