import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './componentes/Home';
import CartPages from './componentes/cartPages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cartpages" component={ CartPages } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
