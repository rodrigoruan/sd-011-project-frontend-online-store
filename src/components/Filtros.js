import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Filtros extends Component {
  constructor() {
    super();
    this.setCategories = this.setCategories.bind(this);
    this.state = {
      categories: undefined,
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setCategories(categories);
  }

  setCategories(categories) {
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;
    if (categories === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {categories.map((category) => (
          <label key={ category.name } htmlFor={ category.id } data-testid="category">
            <input
              type="radio"
              id={ category.id }
              name="category"
              value={ category.id }
              onClick={ onClick }
            />
            { category.name }
          </label>
        ))}
      </div>
    );
  }
}

Filtros.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Filtros;
