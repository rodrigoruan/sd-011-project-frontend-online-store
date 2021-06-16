import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/cart" component={ Cart } />
      <Route path="/details/:id" render={ (props) => <Details { ...props } /> } />
    </BrowserRouter>
  );
}

export default App;
