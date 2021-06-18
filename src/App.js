import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormularioPagamento from './pages/FormularioPagamento';
import { ListagemDeProdutos, ShoppingCart, DetalhesProduto } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ListagemDeProdutos } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
        <Route
          path="/detalhesproduto/:category_id/:product_id/:title"
          render={ (props) => <DetalhesProduto { ...props } /> }
        />
        <Route path="/FinalizarCompra" component={ FormularioPagamento } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
