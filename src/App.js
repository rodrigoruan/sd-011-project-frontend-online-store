import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Cart } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
