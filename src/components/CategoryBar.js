import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class CategoryBar extends Component {
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
    this.setState({
      categoriesList: categories,
    });
  }

  render() {
    const { categoriesList } = this.state;
    const { onClickCategory } = this.props;
    return (
      <div className="categories-container">
        <ul>
          {categoriesList.map((category) => (
            <li key={ category.id }>
              <label htmlFor={ category.id } data-testid="category">
                {category.name}
                <input
                  type="radio"
                  id={ category.id }
                  value={ category.name }
                  name="selectedCategory"
                  onClick={ () => onClickCategory(category.id) }
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryBar;

CategoryBar.propTypes = {
  onClickCategory: PropTypes.func.isRequired,
};
