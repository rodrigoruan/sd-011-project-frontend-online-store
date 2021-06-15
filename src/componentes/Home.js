import React, { Component } from 'react';
import { getCategories } from '../services/api';
import ButtonCart from './ButtonCart';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const resultCategories = await getCategories();
    this.setState({
      categories: resultCategories,
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <ol>
          { categories.map((item, index) => (
            <li data-testid="category" key={ index }>{ item.name }</li>)) }
        </ol>
        <ButtonCart />
      </div>
    );
  }
}

export default Home;
