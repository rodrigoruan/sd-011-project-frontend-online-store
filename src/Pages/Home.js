import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductList from '../ProductList';
import ShoppingCartButton from './ShoppingCartButton';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      productCategories: [],
      filterCategories: '',
    };
    this.categoriesNames = this.categoriesNames.bind(this);
    this.onClickCategories = this.onClickCategories.bind(this);
  }

  componentDidMount() {
    this.categoriesNames();
  }

  onClickCategories({ target: { value } }) {
    this.setState({
      filterCategories: value,
    });
  }

  async categoriesNames() {
    const categories = await api.getCategories();
    this.setState({
      productCategories: categories,
    });
  }

  render() {
    const { productCategories, filterCategories } = this.state;
    return (
      <fragment>
        <ProductList selectedCategory={ filterCategories } />
        <div className="categoriesList">
          { productCategories.map((category) => (
            <div key={ category.id }>
              <input
                type="radio"
                data-testid="category"
                value={ category.id }
                name="categoria"
                onClick={ this.onClickCategories }
              />
              { category.name }
            </div>))}
        </div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <ShoppingCartButton />
        </Link>
      </fragment>
    );
  }
}

export default Home;
