import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import ShoppingCart from './Components/ShoppingCart';
import PageProduct from './Components/PageProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shoppingcart" component={ ShoppingCart } />
          <Route path="/pageProduct/:id" render={ (props) => <PageProduct { ...props } /> } />
        </Switch>
      </BrowserRouter>

    </div>
  );
}
//https://api.mercadolibre.com/items?ids=${productId}

export default App;
