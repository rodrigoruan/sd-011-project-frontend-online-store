import React, { Component } from 'react'

export default class FiltersBar extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <form action="">
          { categories.map(({ id, name }) => (
            <label data-testid="category" key={ id } htmlFor={ id }>
              <input type="checkbox" name={ name } id={ id } />
              { name }
            </label>
          )) }
        </form>
      </div>
    )
  }
}
