import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ListProducts from './pages/ListProducts';
import ShopingCart from './pages/ShopingCart';
import ProductDetail from './pages/ProductDetail';
// import * as api from './services/api';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <ListProducts /> } />
        <Route exact path="/shoppingCart" render={ () => <ShopingCart /> } />
        <Route
          path="/product/:id"
          render={ (props) => <ProductDetail { ...props } /> }
        />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
