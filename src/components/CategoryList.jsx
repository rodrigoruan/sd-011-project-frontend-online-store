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
      <div className="select is-info search-size-1">
        <select name="category" onChange={ handleUserInput }>
          <option
            name=""
            value=""
          >
            Selecione uma categoria
          </option>
          {categories.map((category) => (
            <option
              key={ category.id }
              data-testid="category"
              name="category"
              value={ category.id }
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

CategoryList.propTypes = {
  handleUserInput: PropTypes.func,
}.isRequired;

export default CategoryList;
