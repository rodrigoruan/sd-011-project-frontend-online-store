import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { BiCircle } from 'react-icons/bi';
import SearchBar from '../components/SearchBar';
import * as Api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.listCategories = this.listCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.listCategories();
  }

  async fetchCategories() {
    const requestCategories = await Api.getCategories();
    this.setState({
      categories: requestCategories,
    });
  }

  listCategories() {
    const { categories } = this.state;
    return categories.map((category) => (
      <li key={ category.id } data-testid="category">
        <BiCircle />
        { category.name }
      </li>));
  }

  render() {
    return (
      <main>
        <SearchBar />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <MdShoppingCart />
        </Link>
        <div>{this.listCategories()}</div>
      </main>
    );
  }
}

export default Home;
