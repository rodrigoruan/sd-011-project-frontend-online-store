import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentDidMount() {
    this.renderCategories();
  }

  async renderCategories() {
    const data = await api.getCategories();
    this.setState({
      categories: data,
    });
  }

  render() {
    const { handleRadioClick } = this.props;
    const { categories } = this.state;
    return (
      <div className="categories">
        <h5>Categorias:</h5>
        {categories.map((el) => (
          <label key={el.id} htmlFor={el.id}>
            {el.name}
            <input
              key={el.id}
              type="radio"
              id={el.id}
              name={el.name}
              data-testid="category"
              value={el.id}
              onClick={handleRadioClick}
            />
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;
