<<<<<<< HEAD
import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CartItems from './components/CartItems';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ SearchBar } />
        <Route exact path="/cartItems" component={ CartItems } />
      </BrowserRouter>
    );
  }
=======
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './componentes/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
>>>>>>> 21995ea51ae56a9b1c5ae0b1993a61881d33d13f
}
