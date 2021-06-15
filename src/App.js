import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListagemDeProdutos from './ListagemDeProdutos';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ListagemDeProdutos } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
