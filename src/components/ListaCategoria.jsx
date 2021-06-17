import React, { Component } from 'react';
import * as api from '../services/api';
import { Loading, ProductCard } from './index';

class ListaCategoria extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      categories: [],
      filteredCategories: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleClick({ target: { id } }) {
    console.log(id);
    this.fetchCategory(id);
  }

  async fetchCategory(id) {
    const response = await api.getProductsFromCategoryAndQuery(id, '$QUERY');
    this.setState({
      filteredCategories: response.results,
      loading: false,
    });
  }

  async fetchCategories() {
    const apiResponse = await api.getCategories();
    this.setState({
      loading: false,
      categories: apiResponse,
    });
  }

  render() {
    const { loading, categories, filteredCategories } = this.state;
    console.log(filteredCategories, "filtered");
    const loadingComponent = <Loading />;
    const categoryFiltered = (
      <div>
        {filteredCategories.map(({ id, title, thumbnail, price }) => (
          <ProductCard
            key={ id }
            title={ title }
            imgPath={ thumbnail }
            price={ price }
          />
        ))}
      </div>);
    const categoryList = (
      <div>
        {categories.map(({ id, name }) => (
          <label key={ id } htmlFor="category-input">
            {name}
            <input
              id="category-input"
              type="radio"
              data-testid="category"
              key={ id }
              onClick={ this.handleClick }
              value={ name }
              name="category-name"
            />
          </label>
        ))}
      </div>
    );
    return (
      <div>
        {loading ? loadingComponent : categoryList}
        { categoryFiltered }
      </div>
    );
  }
}

export default ListaCategoria;
