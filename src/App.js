import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetalhesProduto from './DetalhesProduto';
import ListagemDeProdutos from './ListagemDeProdutos';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ListagemDeProdutos } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
        <Route path="/detalhesproduto/:categoria/:item" render={ (props) => <DetalhesProduto { ...props } /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
