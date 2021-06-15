import React from 'react';
import * as fetchApi from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };

    this.getList = this.getList.bind(this);
    this.requestCart = this.requestCart.bind(this);
  }

  componentDidMount() {
    this.requestCart();
  }

  getList(toRender) {
    this.setState({
      categories: toRender,
    });
  }

  async requestCart() {
    const toRender = await fetchApi.getCategories();
    this.getList(toRender);
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories
          .map((e, index) => <p data-testid="category" key={ index }>{e.name}</p>)}
      </div>
    );
  }
}

export default CategoriesList;
