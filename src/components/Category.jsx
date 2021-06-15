import React from 'react';
import * as api from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.handlerState = this.handlerState.bind(this);
  }

  componentDidMount() {
    this.handlerState();
  }

  async handlerState() {
    const response = await api.getCategories().then();
    this.setState({
      categories: response,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <form>
          {categories.map((category, index) => (
            <label htmlFor="categories" key={ index }>
              { category.name}
              <input
                key={ index }
                data-testid="category"
                type="radio"
                name="categories"
              />
            </label>
          ))}
        </form>
      </div>
    );
  }
}
export default Category;
