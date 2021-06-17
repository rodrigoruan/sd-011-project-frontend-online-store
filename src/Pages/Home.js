import React from 'react';
import * as api from '../services/api';
import ProductList from '../ProductList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      productCategories: [],
    };
    this.categoriesNames = this.categoriesNames.bind(this);
  }

  componentDidMount() {
    this.categoriesNames();
  }

  async categoriesNames() {
    const categories = await api.getCategories();
    this.setState({
      productCategories: categories,
    });
  }

  render() {
    const { productCategories } = this.state;
    return (
      <fragment>
        <h3
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <ProductList />
        <div>
          { productCategories.map((category) => (
            <div key={ category.id }>
              <input
                data-testid="category"
                type="radio"
                name="categoria"
              />
              {category.name}
            </div>))}
        </div>
      </fragment>
    );
  }
}

export default Home;
