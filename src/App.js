import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import cartPage from './pages/CartPage';
import ProductDetail from './pages/productDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <Home /> } />
        <Route path="/cart" component={ cartPage } />
        <Route path="/details/:id" component={ ProductDetail } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
