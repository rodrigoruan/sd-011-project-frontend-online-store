import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import cartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <Home /> } />
        <Route path="/cart" component={ cartPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
