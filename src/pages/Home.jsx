import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardItem from '../components/CardItem';
import * as api from '../services/api';
import '../styles/Home.css';

class Home extends React.Component {
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

  /** A função getCategories é chamada no componentDidMount para
   * que tenhamos a lista de categorias armazenada, para renderi-
   * zação posterior. */
  componentDidMount() {
    this.getCategories();
  }

  /** Função responsável por fazer requisições à API do Mercado
   * Livre, de acordo com o que for passado por parâmetro. */
  async getItemsFromCategoryAndQuery(category, inputQuery) {
    const request = await api.getProductsFromCategoryAndQuery(category, inputQuery);
    this.setState({
      response: request.results,
    });
  }

  /** Joga a lista de categorias para o state "allCategories" */
  async getCategories() {
    const response = await api.getCategories();
    this.setState({
      allCategories: response,
    });
  }

  /** Função responsável por pegar dados do input e catagory e
   * jogar para o state */
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

  /** A função assíncrona requestButton é usada toda vez que
   * o botão de pesquisar é acionado. Assim, a função getItemsFromCategoryAndQuery
   * é chamada, fazendo a devida requisição.
   * A função getItemsFromCategoryAndQuery também é chamada quando
   * há click em alguma categoria, quando é feita uma vefificação
   * na função acima chamada getTextAndCategory.
   * */
  async requestButton() {
    this.clearState();
    const { inputQuery, category } = this.state;
    this.getItemsFromCategoryAndQuery(category, inputQuery);
  }

  /** Esta função clearState é chamada quando uma nova requisição
   * é feita. Isso deve acontecer para que não tenhamos conflitos
   * em novas requisições, quando novos itens se misturtam com os
   * antigos */
  clearState() {
    this.setState({
      response: [],
    });
  }

  render() {
    const { allCategories, response } = this.state;
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
                  {anyCategory.name}
                </button>
              ))}
            </div>
          </aside>
        </div>
        <div>
          <div className="topTools">
            <div className="search-bar">
              <form>
                <label
                  htmlFor="queryInput"
                  data-testid="home-initial-message"
                  className="input"
                >
                  {/* eslint-disable-next-line react/jsx-max-depth */}
                  <input
                    placeholder="🔎 Digite o termo de pesquisa ou escolha uma categoria."
                    type="text"
                    name="inputQuery"
                    data-testid="query-input"
                    id="queryInput"
                    onChange={ this.getTextAndCategory }
                  />
                </label>
              </form>
              <button
                className="queryButton"
                type="button"
                onClick={ this.requestButton }
                data-testid="query-button"
              >
                Pesquisa
              </button>
            </div>
            <Link to="/carrinho" data-testid="shopping-cart-button">
              Carrinho de compras 🛒
            </Link>
          </div>
          <div className="boardItems">
            <CardItem products={ response } addState={ addState } />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addState: PropTypes.func.isRequired,
};

export default Home;
