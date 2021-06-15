import React, { Component } from 'react';
import propTypes from 'prop-types';

class CategoryList extends Component {
  render() {
    const { category } = this.props;
    const { name, id } = category;
    return (
      <label htmlFor={ id }>
        <input name="category" id={ id } type="radio" data-testid="category" />
        { name }
      </label>
    );
  }
}

CategoryList.defaultProps = {
  category: [],
  name: '',
  id: '',
};

CategoryList.propTypes = {
  category: propTypes.objectOf(propTypes.string),
  name: propTypes.string,
  id: propTypes.string,
};

export default CategoryList;
