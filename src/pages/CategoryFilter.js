import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class CategoryFilter extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchFilterCategories();
  }

  async fetchFilterCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {
          categories.map((cat) => (
            <li data-testid="category" key={ cat.id }>
              { cat.name }
            </li>
          ))
        }
      </ul>
    );
  }
}
