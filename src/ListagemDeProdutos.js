import React, { Component } from 'react';
import Loading from './Loading';
import * as api from './services/api';
import CartButton from './components/cartButton';

class ListagemDeProdutos extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      categories: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const apiResponse = await api.getCategories();
    console.log(apiResponse);
    this.setState({
      loading: false,
      categories: apiResponse,
    });
  }

  render() {
    const { loading, categories } = this.state;
    const loadingComponent = <Loading />;
    const categoryList = (
      <div>
        {categories.map(({ id, name }) => (
          <p data-testid="category" key={ id }>
            {name}
          </p>
        ))}
      </div>
    );
    return (
      <div>
        <CartButton />
        {loading ? loadingComponent : categoryList}
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ListagemDeProdutos;
