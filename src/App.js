import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';

import TopBar from './components/TopBar';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  constructor() {
    super();

    this.state = {
      query: ' ',
      category: 'MLB1648',
      loading: true,
      products: [],
      cart: {},
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.searchApi = this.searchApi.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  componentDidMount() {
    this.searchApi();
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState(({ [name]: value }));
    this.searchApi();
  }

  async searchApi() {
    this.setState({ loading: true });
    const { query, category } = this.state;
    try {
      const { results } = await getProductsFromCategoryAndQuery(category, query);
      this.setState({ products: results, loading: false });
    } catch (error) {
      console.error(error);
    }
  }

  addCart(cart) {
    const { product, product: { id }, comments, counter } = cart;
    this.setState((state) => (
      { cart: { [id]: { ...state.cart, ...product, counter, comments } } }
    ));
  }

  render() {
    const { query, category, products, loading, cart } = this.state;
    return (
      <BrowserRouter>
        <TopBar handleOnChange={ this.handleOnChange } />
        <Switch>
          <Route exact path="/">
            <Home state={ { query, category, products, loading } } />
          </Route>
          <Route
            path="/product/:id"
            render={ (props) => (
              <ProductDetails
                { ...props }
                query={ query }
                category={ category }
                addCart={ this.addCart }
                cart={ cart }
              />
            ) }
          />
          <Route
            path="/shopping-cart"
            render={ (props) => <ShoppingCart { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default App;
