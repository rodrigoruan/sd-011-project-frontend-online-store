import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ShopCart from './ShopCart';
import * as fetchAPI from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.fetchProductCategory = this.fetchProductCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProductCategory();
  }

  componentDidUpdate() {

  }

  async fetchProductCategory() {
    const fetchedCategories = await fetchAPI.getCategories();
    this.setState({
      categories: fetchedCategories,
    });
  }

handleChange({ target })  {
  const { value, name }= target;
  this.setState({
    [name]: value
  })
}

async fetchProducts() {
  const { search, categoryId } = this.state;
  const fetchedProduts = await fetchAPI.getProductsFromCategoryAndQuery(categoryId, search);
  console.log(fetchedProduts);
}

  render() {
    const { categories } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input type="text" data-testid="query-input" name="search" onChange={ this.handleChange } />
        <button type="button" data-testid="query-button" onClick={ this.fetchProducts } />
        <h2>Categorias:</h2>
        <select onChange= { this.handleChange } name="categoryId">
          {categories.map((category) => (
            <option
              data-testid="category"
              key={ category.id }
              value={ category.id }
            >
              {category.name}
            </option>))}
        </select>
        <Router>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src="./images/cart.svg" alt="Cart" />
          </Link>
          <Switch>
            <Route path="/cart" component={ ShopCart } />
          </Switch>
        </Router>
      </div>
    );
  }
}
