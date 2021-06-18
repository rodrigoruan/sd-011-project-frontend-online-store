import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './css/searchlist.css';
import './css/home.css';
import * as api from './services/api';
import {
  About,
  NotFound,
  ShoppingCart,
  Home,
  FinishScreen,
  ProductDetails,
} from './pages/zPageMenu';
import { Header } from './components/zComponentsMenu';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: '',
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    api.getCategories();
    api.getProductsFromCategoryAndQuery();
  }

  handleAddToCart = (id, title, thumbnail, price) => {
    const { shoppingCart } = this.state;
    const oldItems = [...shoppingCart];
    const newItem = { id, title, thumbnail, price };
    this.setState({ shoppingCart: [...oldItems, newItem] });
  };

  render() {
    const { shoppingCart } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          {/* prettier-ignore */}
          <Route
            exact
            path="/"
            render={
              (props) => <Home { ...props } handleAddToCart={ this.handleAddToCart } />
            }
          />
          <Route path="/details/:id" render={ (props) => <ProductDetails { ...props } /> } />
          <Route
            exact
            path="/cart"
            render={ (props) => <ShoppingCart { ...props } cartItems={ shoppingCart } /> }
          />
          <Route exact path="/about" component={ About } />
          <Route exact path="/finishscreen" component={ FinishScreen } />
          <Route component={ NotFound } />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}
