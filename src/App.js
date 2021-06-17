import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarrinhoCompras from './components/CarrinhoCompras';
import HomeInitial from './components/HomeInitial';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/carrinho-compras" component={ CarrinhoCompras } />
        <Route path="/" component={ HomeInitial } />
        <Route exact path="/details" component={ Details } />
      </Switch>
    </Router>
  );
}

export default App;
