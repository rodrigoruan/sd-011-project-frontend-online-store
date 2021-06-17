import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import './home.css';

import { FiltersBar, Loading } from '../components/Components';
import { ProductsList } from '../containers/Containers';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      crrCategory: '',
      products: [],
      loading: false,
      searchText: '',
    };

    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.FetchCategories();
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

        if (id && searchText) {
          const getProducts = await api.getProductsFromCategoryAndQuery(id, searchText);
          SetProducts(getProducts);
        } 
        else if (id && !searchText) {
          const getProducts = await api.getProductsFromCategory(id);
          SetProducts(getProducts);
        }
        else if (searchText && !id) {
          const getProducts = await api.getProductsFromQuery(searchText);
          SetProducts(getProducts);
        }
        else {
          alert('Por favor escolha alguma categoria ou digite algo para pesquisar');
          this.setState({
            loading: false,
          })
        }
      }
    )
  }

  handleInputChange(e) {
    const text = e.target.value;

    this.setState({
      searchText: text,
    });
  }

  handleSearchClick() {
    const id = this.state.crrCategory || "";
    const searchText = this.state.searchText || "";

    this.FetchProducts(id, searchText)
  }

  setCategory = (e) => {
    const { id } = e.target;
    this.setState({
      crrCategory: id,
    });
  }

  render() {
    const { categories, loading } = this.state;

    return (
      <div className="Home">
        <FiltersBar categories={ categories } setCategory={ this.setCategory } />
        <div className="container">
          <label htmlFor="search-input">
            <input type="text" name="search" id="search-input" data-testid="query-input" onChange={ this.handleInputChange } />
            <button type="button" name="button" data-testid="query-button" onClick={ this.handleSearchClick } >Pesquisar</button>
            <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho de Compras</Link>
          </label>
          <h1 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>

          { loading ? <Loading />
            : <ProductsList products={ this.state.products } /> };
        </div>
      </div>
    );
  }
}
