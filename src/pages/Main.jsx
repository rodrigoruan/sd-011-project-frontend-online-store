import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ProductListing from '../components/ProductListing';
import Category from '../components/Category';
import CardCreator from '../components/CardCreator';
import * as api from '../services/api';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      loading: true,
      query: '',
      categories: '',
    };

    this.fetchProductCategory = this.fetchProductCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  }

  async fetchProductCategory() {
    const { query, categories } = this.state;
    api
      .getProductsFromCategoryAndQuery(query, categories)
      .then((data) => this.setState({ productList: data.results, loading: false }));
  }

  render() {
    const { productList, loading, query } = this.state;
    return (
      <div>
        <Category change={ this.handleChange } />
        <SearchBar
          click={ this.fetchProductCategory }
          change={ this.handleChange }
          value={ query }
        />
        <ProductListing texto="Nenhum produto foi encontrado" />
        { loading
          ? null
          : productList
            .map((product, index) => (
              <div key={ index }><CardCreator item={ product } /></div>
            )) }
      </div>
    );
  }
}
export default Main;
