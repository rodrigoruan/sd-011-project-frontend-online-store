import React, { Component } from 'react';
import ProductSearch from '../components/ProductSearch';
import { getCategories } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      categories: [],
    };
    this.renderCategories = this.renderCategories.bind(this);
    this.setLoadState = this.setLoadState.bind(this);
  }

  componentDidMount() {
    this.setLoadState();
  }

  async setLoadState() {
    const data = [...new Set(await getCategories())];
    this.setState((state) => ({
      loading: false,
      categories: [...state.categories, ...data],
    }));
  }

  renderCategories(data) {
    return (
      <ul>
        {data.map(({ name }, index) => (
          <li
            data-testid="category"
            key={ index }
          >
            { name }
          </li>))}
      </ul>);
  }

  render() {
    const { loading, categories } = this.state;
    return (
      <>
        <ProductSearch />
        {loading ? 'Loading...' : this.renderCategories(categories)}
      </>
    );
  }
}
export default Home;
