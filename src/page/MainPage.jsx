import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import CategorieList from '../components/CategorieList';
import SearchBar from './SearchBar';
import * as api from '../services/api';
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      products: [],
      categories: [],
      category: '',
      loading: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchProduct = this.searchProduct.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ categories, loading: false }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => name === 'category' && this.searchProduct());
  }

  async searchProduct() {
    const { searchInput, category } = this.state;
    const resposta = await api.getProductsFromCategoryAndQuery(searchInput, category);
    this.setState({
      products: resposta.results,
    });
  }



  render() {
    const { searchInput, loading, categories, products } = this.state;
    return (
      <div className="main">
        <div className="nav">
          {loading ? <Loading /> : categories
            .map((element) => (<CategorieList
              key={element.id}
              category={element}
              onClick={this.handleChange}
            />))}
        </div>
        <div>
          <div className="search">
            <h5
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h5>
            <SearchBar
              value={searchInput}
              onChange={this.handleChange}
              onClick={this.searchProduct}
            />
          </div>

          <div className="product">
            {products
              .map((product, index) => (
                <ProductCard key={index} onClick={this.addToCart} product={product} />))}
          </div>
        </div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img
            src="images/Carrinho-de-Compras.png"
            alt="Carrinho de Compras"
            width="50px"
          />
        </Link>
      </div>
    );
  }
}
