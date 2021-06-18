import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Páginas
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
// Componentes
import CategoryFilter from './components/CategoryFilter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/categoryfilter" component={ CategoryFilter } />
          <Route path="/detalhes/:id" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
