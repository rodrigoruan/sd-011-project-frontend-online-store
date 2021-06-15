import React, { Component } from 'react';

class CategoryList extends Component {
  render() {
    const { name, id } = this.props.category;
    return (
      <label htmlFor={id}>
        <input name="category" id={id} type="radio" data-testid="category" />
        { name }
      </label>
    )
  }
}

export default CategoryList;
