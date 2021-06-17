import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart:id" component={ ProductCard } />
          <Route
            path="/details/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
