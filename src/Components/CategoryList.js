import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

export default class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  async getList() {
    const listCategories = await api.getCategories()
      .then((category) => this.setState({
        categories: category,
      }));
    return listCategories;
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="sidebar-catories">
        {console.log(categories)}
        <ul>
          {categories.map((category) => (
            <li
              data-testid="category"
              key={ category.id }
            >
              <Link to={ `/category/${category.id}` }>{ category.name }</Link>
            </li>))}
        </ul>
      </div>
    );
  }
}
