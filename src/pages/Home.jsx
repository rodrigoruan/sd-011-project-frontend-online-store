import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

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

    this.renderProducts = this.renderProducts.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  componentDidMount() {
    this.FetchAPI();
  }

  async FetchAPI() {
    const getCategories = await api.getCategories();
    this.setState({
      categories: getCategories,
    });
  }

  async FetchProducts(id, searchText) {
    this.setState(
      { loading: true },
      async () => {
        const getProducts = await api.getProductsFromCategoryAndQuery(id, searchText);
        this.setState({
          products: getProducts,
          loading: false,
        });
      }
    )
  }

  handleSearchClick() {
    const inputText = document.querySelector('#search-input').value;
    
    this.setState({
      searchText: inputText,
    });

    const id = this.state.crrCategory ? this.state.crrCategory : false;
    const searchText = this.state.searchText ? this.state.searchText : false;

    this.FetchProducts(id, searchText)
  }

  setCategory = ({ target }) => {
    const { id } = target;
    this.setState({
      crrCategory: id,
    });
  }

  renderProducts() {
    const { loading } = this.state;
    if (loading) return <Loading />
    return <ProductsList products={ this.state.products } />
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="Home">
        <label htmlFor="search-input">
          <input type="text" name="search" id="search-input" data-testid="query-input" />

          <button type="button" name="button" data-testid="query-button" onClick={ () => this.handleSearchClick() } >Pesquisar</button>

          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </label>

        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho de Compras</Link>

        <FiltersBar categories={ categories } setCategory={ this.setCategory } />

        { this.renderProducts() }
      </div>
    );
  }
}
