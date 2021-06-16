import React, { Component } from 'react';
import { getCategories } from '../services/api';


class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();

    this.setState({
      categoriesList: categories,
    });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <div>
        <ul>
          {categoriesList.map((categorie) => (
            <li data-testid="category" key={ categorie.id }>{ categorie.name }</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
