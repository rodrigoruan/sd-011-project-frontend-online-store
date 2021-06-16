import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Categories from './Components/Categories';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route path="/categories/:id" component={ Categories } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
