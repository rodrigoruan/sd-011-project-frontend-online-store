import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import 'bulma/css/bulma.min.css';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => {
        this.setState({
          categories,
        });
      });
  }

  render() {
    const { categories } = this.state;
    const { handleUserInput } = this.props;
    return (
      <div className="categories">
        {categories.map((category) => (
          <div key={ category.id }>
            <label htmlFor={ category.name }>
              <input
                type="radio"
                name="category"
                id={ category.name }
                value={ category.id }
                data-testid="category"
                onChange={ handleUserInput }
              />
              {category.name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  handleUserInput: PropTypes.func,
}.isRequired;

export default CategoryList;
