import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarrinhoCompras from './components/CarrinhoCompras';
import HomeInitial from './components/HomeInitial';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/carrinho-compras" component={ CarrinhoCompras } />
        <Route path="/" component={ HomeInitial } />
      </Switch>
    </Router>
  );
}

export default App;
