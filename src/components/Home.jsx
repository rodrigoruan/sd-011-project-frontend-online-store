import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import * as api from '../services/api';

class Home2 extends React.Component {
  constructor() {
    super();
    this.state = {
      allCategories: [],
      inputQuery: '',
      category: '',
      response: [],
    };

    this.getTextAndCategory = this.getTextAndCategory.bind(this);
    this.requestButton = this.requestButton.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  async getItemsFromCategoryAndQuery(category, inputQuery) {
    const request = await api.getProductsFromCategoryAndQuery(category, inputQuery);
    this.setState({
      response: request.results,
    });
  }

  // Joga a lista de categorias para o state "allCategories"
  async getCategories() {
    const response = await api.getCategories();
    this.setState({
      allCategories: response,
    });
  }

  // Função responsável por pegar dados do input e catagory e
  // jogar para o state
  getTextAndCategory({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => {
      if (name === 'category') {
        this.requestButton();
      }
    });
  }

  async requestButton() {
    this.clearState();
    const { inputQuery, category } = this.state;
    // const request = await this.getItemsFromInput(inputQuery);
    // this.setState({
    //   response: request.results,
    // });

    // if (category && inputQuery) {
    // Caso verdadeiro, faça a requisição através de uma
    // função assíncrona e adicione o resultado à propriedade
    // results, no state.
    this.getItemsFromCategoryAndQuery(category, inputQuery);
    // }
    // else if (inputQuery) {
    //   this.getItemsFromInput(inputQuery);
    // } else if (category) {
    //   this.getItemsFromCategory(category);
    // }
  }

  clearState() {
    this.setState({
      response: [],
    });
  }

  render() {
    const { allCategories, inputQuery, category, response } = this.state;
    const { addState } = this.props;
    return (
      <div className="main-page">
        <div className="categories">
          <aside>
            <div className="category-form">
              {allCategories.map((anyCategory) => (
                <button
                  type="button"
                  key={ anyCategory.id }
                  data-testid="category"
                  name="category"
                  value={ anyCategory.id }
                  onClick={ this.getTextAndCategory }
                >
                  { anyCategory.name }
                </button>
              ))}
            </div>
          </aside>
        </div>
        {/* <Categoryy */}
        <div>
          <form className="search-bar">
            <label htmlFor="queryInput" data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
              <input
                type="text"
                name="inputQuery"
                data-testid="query-input"
                id="queryInput"
                onChange={ this.getTextAndCategory }
              />
            </label>
          </form>
          <button
            type="button"
            onClick={ this.requestButton }
            data-testid="query-button"
          >
            Pesquisa
          </button>
          <Link to="/carrinho" data-testid="shopping-cart-button">
            Carrinho de compras 🛒
          </Link>
          <CardItem products={ response } addState={ addState } />
        </div>
      </div>
    );
  }
}

export default Home2;
