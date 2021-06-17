import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart/index';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          <Route path="/cart" component={ ShoppingCart } />
          <Route path="/product/:id" component={ ProductDetail } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
