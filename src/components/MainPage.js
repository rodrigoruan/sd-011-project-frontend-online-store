import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Card from './Card';
import * as fetchApi from '../services/api';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      products: [],
      loading: true,
      categories: [],
      category: '',
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeCategories = this.handleChangeCategories.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);

    this.getCategoryAndQuery = this.getCategoryAndQuery.bind(this);
  }

  /* Função para chamar a requisição da função getCategories no carregamento da página */
  componentDidMount() {
    this.requestCart();
  }

  /* Função para capturar o valor digitado no input de busca */
  handleChangeSearch({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  /* Função para fazer requisição da função getProductFromCategoryAndQuery pelo atributo onClick no botão */
  handleClickButton() {
    this.getCategoryAndQuery();
  }

  /* Função para capturar e renderizar os produtos por categoria  */
  async handleChangeCategories({ target }) {
    const { searchText } = this.state;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    const response = await fetchApi.getProductsFromCategoryAndQuery(value, searchText);
    this.setState({
      products: response.results,
      loading: false,
    });
  }

  /* Função para fazer requisição da função getProducsFromCategoryAndQuery */
  async getCategoryAndQuery() {
    const { searchText, category } = this.state;
    const getApi = await fetchApi.getProductsFromCategoryAndQuery(category, searchText);
    this.setState({
      products: getApi.results,
      loading: false,
    });
  }

  /* Função para fazer requisição da função getCategories que é chamada na componentDidMount */
  async requestCart() {
    const toRender = await fetchApi.getCategories();
    this.setState({
      categories: toRender,
    });
  }

  render() {
    const { searchText, products, loading, categories } = this.state;
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="input-search">
          <input
            name="input-search"
            type="text"
            data-testid="query-input"
            onChange={ this.handleChangeSearch }
            value={ searchText }
          />
        </label>
        <Button handleClick={ this.handleClickButton } value={ searchText } />
        <Link
          data-testid="shopping-cart-button"
          to="/components/Cart"
        >
          Cart
        </Link>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <div>
          {categories
            .map((e, index) => (
              <label key={ index } htmlFor="category">
                <input
                  data-testid="category"
                  name="category"
                  type="radio"
                  value={ e.id }
                  onClick={ this.handleChangeCategories }
                />
                { e.name }
                {' | '}
              </label>
            ))}
        </div>
        {!loading && products.map((e, index) => <Card product={ e } key={ index } />)}
      </div>
    );
  }
}

export default MainPage;
