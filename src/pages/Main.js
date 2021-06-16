import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import CartButton from '../components/CartButton';
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick({ target }) {
    const { value } = target;
    const { productList, query } = this.state;
    if (productList !== []) {
      this.setState({ loading: true });
      api
        .getProductsFromCategoryAndQuery(value, query)
        .then((data) => this.setState({ productList: data.results, loading: false }));
    }
  }

  async fetchProductCategory() {
    const { query, categories } = this.state;
    api
      .getProductsFromCategoryAndQuery(categories, query)
      .then((data) => this.setState({ productList: data.results, loading: false }));
  }

  render() {
    const { productList, loading, query } = this.state;
    return (
      <div>
        <Category change={ this.handleChange } click={ this.handleClick } />
        <SearchBar
          click={ this.fetchProductCategory }
          change={ this.handleChange }
          value={ query }
        />
        <CartButton />
        <ProductListing texto="Nenhum produto foi encontrado" />
        {loading
          ? null
          : productList.map((product, index) => (
            <div key={ index }>
              <CardCreator item={ product } />
            </div>
          ))}
      </div>
    );
  }
}
export default Main;
