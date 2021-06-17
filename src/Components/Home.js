import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      products: null,
      categories: null,
      search: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickLi = this.handleClickLi.bind(this);
  }

  componentDidMount() {
    getCategories()
      .then((json) => this.setState({ categories: json }));
  }

  handleClick() {
    const { value } = document.querySelector('input');
    const id = getCategories()
      .then((json) => json.id);
    getProductsFromCategoryAndQuery(id, value)
      .then((json) => this.setState({
        products: json.results,
        search: true,
      }));
  }

  async handleClickLi({ target: { id } }) {
    const { value } = document.querySelector('input');
    const query = await getProductsFromCategoryAndQuery(id, value);
    this.setState({ products: query.results });
  }

  render() {
    const { products, search } = this.state;
    const { categories } = this.state;
    return (
      <>
        {/* Renderiza o card de produtos após clicar no botão */}

        <section className={ style.inputContent }>
          <label htmlFor="site-search">
            <input
              data-testid="query-input"
              type="search"
              id="site-search"
            />
          </label>

          <button
            id="search-button"
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Busca
          </button>
          <br />
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
          {products && products.map((product) => (
            <Link
              to={ `/product/${product.id}` }
              key={ product.id }
              data-testid="product-detail-link"
            >
              <div data-testid="product">
                <img src={ product.thumbnail } alt="foto-produto" />
                <h2>{product.title}</h2>
                <p>{product.price}</p>
              </div>
            </Link>))}
          {search && products.length === 0 && <p>Nenhum produto encontrado</p>}
        </section>

        {/* Renderiza o card de produtos após clicar na categoria */}

        <section>
          {categories && categories.map((produto) => (
            <Link
              to="/"
              key={ produto.id }
              className={ style.link }
              onClick={ this.handleClickLi }
            >
              <ul className={ style.list }>
                <li
                  data-testid="category"
                  id={ produto.id }
                >
                  {produto.name}
                </li>
              </ul>
            </Link>
          ))}
        </section>
      </>
    );
  }
}

export default Home;
