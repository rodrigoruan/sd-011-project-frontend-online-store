import React, { Component } from 'react';
import { getCategories } from '../services/api'

export default class CategoryFilter extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    }
  }

  async fetchFilterCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }
  
  componentDidMount() {
   this.fetchFilterCategories();
  }

  render() {
    const value = this.state.categories;
    return (
      <ul>
        {
          value.map((cat) => <li data-testid="category" key={ cat.id }> { cat.name } </li>)
        }
      </ul>
    );
  }
}
