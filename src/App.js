import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchHome from './components/SearchHome';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <SearchHome /> } />
          <Route exact path="/ShoppingCart" render={ () => <ShoppingCart /> } />
          <Route
            path="/ProductDetails/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
