import React, { Component } from 'react';
import Loading from '../components/Loading';
import CategorieList from '../components/CategorieList';
import { getCategories } from '../services/api';

export default class CategorieNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({ categories, loading: false }));
  }

  render() {
    const { categories, loading } = this.state;

    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        { categories
          .map((categorie) => (<CategorieList
            key={ categorie.id }
            categorie={ categorie }
          />))}
      </div>

    );
  }
}
