import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={ () => <Home /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
