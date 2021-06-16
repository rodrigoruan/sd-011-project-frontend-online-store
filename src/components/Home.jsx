import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ShopCart from './ShopCart';
import ProductCard from './ProductCard';
import * as fetchAPI from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      productCards: [],
      categoryId: '',
      search: '',
    };
    this.fetchProductCategory = this.fetchProductCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchProductCategory();
  }

  componentDidUpdate() {

  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchProducts() {
    const { categoryId, search } = this.state;
    const fetchedProducts = await
    fetchAPI.getProductsFromCategoryAndQuery(categoryId, search);
    console.log(fetchedProducts);
    this.setState({ productCards: fetchedProducts.results });
  }

  async fetchProductCategory() {
    const fetchedCategories = await fetchAPI.getCategories();
    this.setState({
      categories: fetchedCategories,
    });
  }

  async fetchCategories(id) {
    const fetchedProductsFromCategories = await
    fetchAPI.getProductsFromCategoryAndQuery(id);
    this.setState({
      productCards: fetchedProductsFromCategories.results,
      categoryId: id,
    });
  }

  render() {
    const { categories, productCards } = this.state;
    if (categories === []) return <div>Loading...</div>;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <label htmlFor="search">
          <input
            type="text"
            data-testid="query-input"
            name="search"
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          aria-label="Save" // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
          data-testid="query-button"
          onClick={ this.fetchProducts }
        >
          Enviar
        </button>
        <h2>Categorias:</h2>
        {categories.map((category) => (
          <button
            type="button"
            data-testid="category"
            key={ category.id }
            value={ category.id }
            name="categoryId"
            onClick={ () => this.fetchCategories(category.id) }
          >
            {category.name}
          </button>
        ))}
        <div>
          {!productCards
            ? <p>Nenhum produto foi encontrado</p> // Tentar retornar apenas após não encontrar
            : productCards.map((product) => (
              <ProductCard
                key={ product.id }
                product={ product }
              />))}
        </div>
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
