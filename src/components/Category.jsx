import React from 'react';
import * as api from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
    };
    this.handlerState = this.handlerState.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
    this.clearProducts = this.clearProducts.bind(this);
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

  clearProducts() {
    this.setState({
      products: [],
    });
  }

  async renderCategory({ target }) {
    this.clearProducts();
    const response = await api.getProductsFromCategoryId(target.id);
    this.setState({
      products: response.results,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="categories">
        <aside>
          <div className="category-form">
            {categories.map((category) => (
              <button
                type="button"
                id={ category.id }
                key={ category.id }
                data-testid="category"
                name="category"
                onClick={ this.renderCategory }
                value={ category.id }
              >
                { category.name }
              </button>
            ))}
          </div>
        </aside>
      </div>
    );
  }
}
export default Category;
