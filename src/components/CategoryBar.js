import React, { Component } from 'react';
import * as api from '../services/api';

export default class CategoryBar extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      selectedCategory: '',
    };
    this.getCategoryList = this.getCategoryList.bind(this);
    this.handleSelectedCategory = this.handleSelectedCategory.bind(this);
  }

  componentDidMount() {
    this.getCategoryList();
  }

  handleSelectedCategory({ target }) {
    const { name, value } = target;
    console.log(target);
    this.setState({
      [name]: value,
    });
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
            <li key={ category.id }>
              <label htmlFor={ category.id }>
                {category.name}
                <input
                  type="radio"
                  id={ category.id }
                  value={ category.name }
                  name="selectedCategory"
                  onClick={ this.handleSelectedCategory }
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
