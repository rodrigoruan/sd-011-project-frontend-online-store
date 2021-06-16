import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListagemDeProdutos from './ListagemDeProdutos';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ListagemDeProdutos } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
