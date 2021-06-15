import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Filtros extends Component {
  constructor() {
    super();
    this.setCategories = this.setCategories.bind(this);
    this.state = {
      categories: undefined,
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setCategories(categories);
  }

  setCategories(categories) {
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {console.log(categories)}
      </div>
    );
  }
}

export default Filtros;
