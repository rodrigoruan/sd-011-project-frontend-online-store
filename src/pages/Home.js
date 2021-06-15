import React, { Component } from 'react';
import * as Api from '../services/api';
import CategoryList from '../components/categoryList';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.requiredCategories();
  }

  async requiredCategories() {
    const request = await Api.getCategories();
    this.setState({
      categories: request,
      loading: false,
    });
  }

  render() {
    const { categories, loading } = this.state;
    return (
      <div>
        { !loading && categories.map((category, index) => <CategoryList key={ index } category={ category } />)}
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default Home;
