import React, { Component } from 'react';
import * as api from '../services/api';
import SearchBarSection from '../components/SearchBarSection/SearchBarSection';
import NavBar from '../components/NavBar/NavBar';
import ProductListSection from '../components/ProductListSection/ProductListSection';

import styles from '../styles/Global.module.css';

export default class Home extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.categoriesToRender = this.categoriesToRender.bind(this);
    this.fetchByQuery = this.fetchByQuery.bind(this);
    this.fetchByCategoryIdAndQuery = this.fetchByCategoryIdAndQuery.bind(this);

    this.state = {
      categories: [],
      products: [],
      searchQuery: '',
      categoryId: '',
      shouldUpdate: false,
    };
  }

  componentDidMount() {
    this.categoriesToRender();
  }

  componentDidUpdate() {
    const { shouldUpdate } = this.state;
    if (shouldUpdate) {
      this.fetchByCategoryIdAndQuery();
    }
  }

  handleInput({ target: { value } }) {
    this.setState({ searchQuery: value });
  }

  selectCategory({ target: { id } }) {
    console.log(id);
    this.setState({
      categoryId: id,
      shouldUpdate: true,
    });
  }

  async categoriesToRender() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  async fetchByQuery() {
    const { searchQuery } = this.state;
    const paramObject = { searchQuery };
    const data = await api.getProductsFromCategoryAndQuery(paramObject);
    const products = data.results;
    this.setState({
      products,
      shouldUpdate: false,
    });
  }

  async fetchByCategoryIdAndQuery() {
    const { searchQuery, categoryId } = this.state;
    const paramObject = { searchQuery, categoryId };
    const data = await api.getProductsFromCategoryAndQuery(paramObject);
    const products = data.results;
    this.setState({
      products,
      shouldUpdate: false,
    });
  }

  render() {
    const { categories, products, searchQuery } = this.state;

    return (
      <div className={ styles.pageContainer }>
        <div className={ styles.navigationBarContainer }>
          {
            categories.map((category) => (
              <NavBar
                key={ category.id }
                id={ category.id }
                name={ category.name }
                selectCategory={ this.selectCategory }
              />
            ))
          }
        </div>

        <div className={ styles.mainContent }>
          <SearchBarSection
            fetchByQuery={ this.fetchByQuery }
            handleInput={ this.handleInput }
            searchQuery={ searchQuery }
          />

          <div className={ styles.productSection }>
            {
              products.length === 0
                ? (
                  <p
                    data-testid="home-initial-message"
                  >
                    Digite algum termo de pesquisa ou escolha uma categoria.
                  </p>
                )
                : products.map((product) => (
                  <ProductListSection key={ product.id } product={ product } />
                ))
            }
          </div>
        </div>

      </div>
    );
  }
}
