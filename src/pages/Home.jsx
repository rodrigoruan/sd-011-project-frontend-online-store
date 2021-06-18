import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import './home.css';

import { FiltersBar, Loading } from '../components/Components';
import ProductsList from '../containers/products-list/ProductsList';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      crrCategory: '',
      products: [],
      loading: false,
      searchText: '',
      cartItems: [],
    };

    this.addToCart = this.addToCart.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  addToCart(product) {
    this.setState((prevState) => {
      return {
        cartItems: [...prevState.cartItems, product],
      };
    })
  }

  componentDidMount() {
    this.FetchCategories();
  }

  handleInputChange(e) {
    const text = e.target.value;

    this.setState({
      searchText: text,
    });
  }

  handleSearchClick() {
    const { crrCategory, searchText } = this.state;
    const id = crrCategory || '';
    const searchTerm = searchText || '';

    this.FetchProducts(id, searchTerm);
  }

  setCategory = (e) => {
    const { id } = e.target;
    this.setState({
      crrCategory: id,
    });
    this.FetchProducts(id);
  }

  async FetchCategories() {
    const getCategories = await api.getCategories();
    this.setState({
      categories: getCategories,
    });
  }

  async FetchProducts(id, searchText) {
    this.setState(
      { loading: true },
      async () => {
        const SetProducts = (getProducts) => {
          this.setState({
            products: getProducts.results,
            loading: false,
          });
        };

        const getProducts = await api.getProductsFromCategoryAndQuery(id, searchText);
        SetProducts(getProducts);
      },
    );
  }

  render() {
    const { categories, loading, products } = this.state;

    return (
      <div className="Home">
        <FiltersBar categories={ categories } setCategory={ this.setCategory } />
        <div className="container">
          <label htmlFor="search-input">
            <input
              type="text"
              name="search"
              id="search-input"
              data-testid="query-input"
              onChange={ this.handleInputChange }
            />
            <button
              type="button"
              name="button"
              data-testid="query-button"
              onClick={ this.handleSearchClick }
            >
              Pesquisar
            </button>
            <Link
              data-testid="shopping-cart-button"
              to="/shopping-cart"
            >
              Carrinho de Compras
            </Link>
          </label>
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>

          { loading ? <Loading />
            : <ProductsList onClick={ this.addToCart } products={ products } /> }
        </div>
      </div>
    );
  }
}
