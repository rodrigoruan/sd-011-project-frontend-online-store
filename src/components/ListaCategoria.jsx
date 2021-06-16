import React, { Component } from 'react';
import * as api from '../services/api';
import { Loading } from '../components/index';

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

  handleClick({ target: { key } }) {
    const categoryArray = this.fetchCategory(key);
    this.setState({
      filteredCategories: categoryArray,
      loading: false,
    });
  }

  async fetchCategory(id) {
    const response = await api.getProductsFromCategoryAndQuery(id, "$QUERY");
    return response;
  }

  async fetchCategories() {
    const apiResponse = await api.getCategories();
    this.setState({
      loading: false,
      categories: apiResponse,
    });
  }

  render() {
    const { loading, categories } = this.state;
    const loadingComponent = <Loading />;
    const categoryList = (
      <div>
        {categories.map(({ id, name }) => (
          <label key={id}>
            {name}
            <input
              type="radio"
              data-testid="category"
              key={id}
              onClick={this.handleClick}
              value={name}
            />
          </label>
        ))}
      </div>
    );
    return (
      <div>
        {loading ? loadingComponent : categoryList}
      </div>
    );
  }
}

export default ListaCategoria;
