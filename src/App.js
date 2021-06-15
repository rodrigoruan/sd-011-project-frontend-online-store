import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from './services/api';

export class App extends Component {
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
          <Link to={ `produto/${produto.id}` } key={ produto.id }>
            <h2>{produto.name}</h2>
          </Link>
        ))}
      </section>
    );
  }
}

export default App;
