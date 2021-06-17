import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './page/MainPage';
import ShoppingCart from './page/ShoppingCart';
import SearchBar from './page/SearchBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route exact path="/search-bar/id" component={ SearchBar } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
