import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Data from '../services/api';
import RadialButton from '../Components/RadialButton';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const fetchApi = await Data.getCategories();
    this.setState({
      categories: fetchApi,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link data-testid="shopping-cart-button" to="/shopcart">Carrinho</Link>
        {categories.map((eachCategory, index) => (
          <RadialButton category={ eachCategory } key={ index } />
        ))}
      </div>
    );
  }
}
