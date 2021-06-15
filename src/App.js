import React from 'react';
import './App.css';
// import * as api from './services/api';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPageHome from './components/SearchPageHome';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ SearchPageHome } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
