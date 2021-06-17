import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      cartItems: [],
    };
    this.fetchProductCategory = this.fetchProductCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  componentDidMount() {
    this.fetchProductCategory();
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

  addCart({ target: { value } }) {
    const { productCards, cartItems } = this.state;
    const itemToCart = productCards.find((item) => item.id === value);
    this.setState({
      cartItems: [...cartItems, itemToCart],
    });
  }

  render() {
    const { categories, productCards, cartItems } = this.state;
    if (categories === []) return <div>Loading...</div>;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/cart',
            state: cartItems,
          } }
        >
          <img src="./images/cart.svg" alt="Cart" />
        </Link>
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
                addCart={ this.addCart }
              />))}
        </div>
      </div>
    );
  }
}
