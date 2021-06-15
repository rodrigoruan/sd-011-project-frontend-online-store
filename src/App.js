import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchHome from './components/SearchHome';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <SearchHome /> } />
          <Route to="/ShoppingCart" render={ () => <ShoppingCart /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
