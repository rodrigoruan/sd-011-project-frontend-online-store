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
// Serviços
import * as storage from './services/storage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productsCart: '',
    };
    this.updateState = this.updateState.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const storageCart = storage.retrieveCart()
  //   const { productsCart } = prevState;
  //   if (JSON.stringify(productsCart) !== JSON.stringify(storageCart)) {
  //     console.log('teste')
  //     this.updateState();
  //   }
  // }

  updateState() {
    const storageCart = storage.retrieveCart();
    this.setState({
      productsCart: storageCart,
    });
  }

  removeItem(id) {
    const { productsCart } = this.state;
    delete productsCart[id];
    localStorage.setItem('shoppingCart', JSON.stringify(productsCart));
    this.updateState();
  }

  render() {
    const { productsCart } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route
            exact
            path="/shoppingcart"
            render={ (props) => <ShoppingCart { ...props } productsCart={ productsCart } onClick={ this.removeItem } /> }
          />
          <Route
            exact
            path="/categoryfilter"
            component={ CategoryFilter }
          />
          <Route path="/detalhes/:id" component={ ProductDetails } />
          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
