import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import DetalhesProduto from './pages/DetalhesProduto';
import { ListagemDeProdutos, ShoppingCart } from './pages/index';

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
