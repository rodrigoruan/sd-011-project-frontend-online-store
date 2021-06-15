import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as api from './services/api';
import Home from './pages/Home';

function App() {
  api.getProductsFromCategoryAndQuery('MLB1055', 'celular');
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
