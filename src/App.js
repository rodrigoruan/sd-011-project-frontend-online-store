import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Páginas
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
// Componentes
import CategoryFilter from './components/CategoryFilter';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     productsCart: 'islene',
  //   };
  // }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={ Main } />
            <Route
              exact
              path="/shoppingcart"
              render={
                ({ ...props }) => <ShoppingCart { ...props } />
              }
            />
            <Route exact path="/categoryfilter" component={ CategoryFilter } />
            <Route path="/detalhes/:id" component={ ProductDetails } />
            <Route exact path="/checkout" component={ Checkout } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
