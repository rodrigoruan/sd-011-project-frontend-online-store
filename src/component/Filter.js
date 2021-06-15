import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
    this.getCategorys = this.getCategorys.bind(this);
  }

  componentDidMount() {
    this.getCategorys();
  }

  async getCategorys() {
    this.setState({
      category: await getCategories(),
    });
  }

  render() {
    const { category } = this.state;

    return (
      <div>
        { category.map(({ name }, index) => (
          <label htmlFor={ index } key={ index }>
            { name }
            <input
              data-testid="category"
              id={ index }
              name="categoryRadio"
              type="radio"
              key={ index }
            />
          </label>
        )) }
      </div>
    );
  }
}
