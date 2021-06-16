import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      auxList: [],
    };
  }

  componentDidMount() {
    this.catchCategory();
  }

  async catchCategory() {
    const categories = await api.getCategories();
    this.setState({
      auxList: categories,
    });
  }

  render() {
    const { auxList } = this.state;
    return (
      <label htmlFor="selectCategorie">
        Escolha sua categoria:
        <br />
        <select id="selectCategorie">
          {auxList.map((categorie) => (
            <option key={ categorie.id } data-testid="category">
              {categorie.name}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default CategoryList;
