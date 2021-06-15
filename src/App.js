import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductsList } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
