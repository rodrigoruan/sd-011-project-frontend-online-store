import React, { Component } from 'react';
import * as api from '../services/api';

export default class CategoryList extends Component {
  constructor() {
    super();

    this.apiCategories = this.apiCategories.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.apiCategories();
  }

  async apiCategories() {
    const allCategories = await api.getCategories();

    this.setState({
      categories: allCategories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {
          categories.map((categorie) => (
            <li data-testid="category" key={ categorie.id }>{categorie.name}</li>))
        }
      </ul>
    );
  }
}
