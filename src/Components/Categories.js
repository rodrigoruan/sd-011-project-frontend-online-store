import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import style from './Categories.module.css';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: null,
    };
    // this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    getCategories()
      .then((json) => this.setState({ categories: json }));
  }

  render() {
    const { categories } = this.state;
    if (!categories) return <div>Loading...</div>;
    return (
      <section>
        { categories.map((produto) => (
          <Link to="/categories/:id" key={ produto.id } className={ style.link }>
            <ul className={ style.list }>
              <li data-testid="category">{produto.name}</li>
            </ul>
          </Link>
        ))}
      </section>
    );
  }
}

export default Categories;
