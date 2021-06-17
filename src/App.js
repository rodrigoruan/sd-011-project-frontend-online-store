import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import ShoppingCart from './Components/ShoppingCart';
import PageProduct from './Components/PageProduct';
import Checkout from './Components/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shoppingcart" component={ ShoppingCart } />
          <Route
            path="/pageProduct/:id"
            render={ (props) => <PageProduct { ...props } /> }
          />
          <Route
            path="/checkout"
            render={ (props) => <Checkout { ...props } /> }
          />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
