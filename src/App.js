import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './componentes/Home';
import CarPages from './componentes/carPages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/" component={ CarPages } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
