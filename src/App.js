import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './page/MainPage';
import ShoppingCart from './page/ShoppingCart';
import ProductDetails from './page/ProductDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route exact path="/product-details/:id" component={ ProductDetails } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
