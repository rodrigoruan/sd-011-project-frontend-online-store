import React, { Component } from 'react';
import * as api from '../services/api';

export default class SideBar extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.requestCategories = this.requestCategories.bind(this);
  }

  componentDidMount() {
    this.requestCategories();
  }

  async requestCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <aside>
        <ul>
          { categories.map((category) => (
            <li data-testid="category" key={ category.id }>{category.name}</li>
          ))}
        </ul>
      </aside>
    );
  }
}
