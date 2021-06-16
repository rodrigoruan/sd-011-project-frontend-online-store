import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Categories from './Categories';
// import SearchProduct from './SearchProduct';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBar: '',
      mostrarProdutos: false,
      categoriesList: [],
      products: [],
      categoryId: '',
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  showProducts = () => {
    this.setState({
      mostrarProdutos: true,
    });
    this.searchProduct();
  }

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  renderProducts = () => {
    const { products } = this.state;
    if (products.length < 1) return <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        { products.map(({ title, price, thumbnail, id }) => (
          <div data-testid="product" key={ id }>
            <img src={ thumbnail } alt={ title } />
            <h3>{ title }</h3>
            <p>{ price }</p>
          </div>
        ))}
      </div>
    );
  }

  saveCategorieId = (id) => {
    this.setState({
      categoryId: id,
    });
    this.showProducts();
  }

  async searchProduct() {
    const { searchBar, categoryId } = this.state;
    const response = await getProductsFromCategoryAndQuery(categoryId, searchBar);
    const { results } = response;

    this.setState({
      products: results,
    });
  }

  async fetchCategories() {
    const categories = await getCategories();

    this.setState({
      categoriesList: categories,
    });
  }

  render() {
    const { searchBar, mostrarProdutos, categoriesList } = this.state;
    return (
      <div>
        <label htmlFor="searchBar">
          <input
            type="text"
            onChange={ this.handleChange }
            value={ searchBar }
            name="searchBar"
            data-testid="query-input"
          />
        </label>
        <button
          type="button"
          onClick={ () => this.showProducts() }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Ir para o carrinho
        </Link>

        <div>
          <ul>
            {categoriesList.map((categorie) => (
              <button
                type="button"
                onClick={ (event) => this.saveCategorieId(event.target.id) }
                id={ categorie.id }
                data-testid="category"
                key={ categorie.id }
              >
                { categorie.name }
              </button>
            ))}
          </ul>
        </div>

        <span data-testid="home-initial-message">
          {mostrarProdutos
            ? this.renderProducts(searchBar)
            : <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>}
        </span>
      </div>
    );
  }
}

export default Home;
