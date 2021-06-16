import React, { Component } from 'react';
import * as api from '../services/api';

export default class CategoryBar extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
    };
    this.getCategoryList = this.getCategoryList.bind(this);
  }

  componentDidMount() {
    this.getCategoryList();
  }

  async getCategoryList() {
    const categories = await api.getCategories();
    const state = this.setState({
      categoriesList: categories,
    });
    return state;
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <div className="categories-container">
        <ul>
          {categoriesList.map((category) => (
            <li key={ category.id } data-testid="category">
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
