import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
import CartIcon from '../../img/shopping-cart.png';
import ProductCard from '../ProductCard/ProductCard';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      products: null,
      categories: null,
      search: false,
      shoppingCart: localStorage.cart ? JSON.parse(localStorage.getItem('cart')) : [],
    };
    this.searchByTerm = this.searchByTerm.bind(this);
    this.listCategoryItens = this.listCategoryItens.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.addFirstItemToCart = this.addFirstItemToCart.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.addNewItemToCart = this.addNewItemToCart.bind(this);
  }

  componentDidMount() {
    getCategories()
      .then((json) => this.setState({ categories: json }));
  }

  handleAddToCart({ thumbnail,
    title,
    price,
    id,
    available_quantity: availableQuantity,
  }) {
    const product = {
      thumbnail,
      title,
      price,
      id,
      quantity: 1,
      availableQuantity,
    };
    const cartDoesNotExists = !localStorage.cart || localStorage.length === 0;
    if (cartDoesNotExists) {
      return this.addFirstItemToCart(product);
    }
    const cart = JSON.parse(localStorage.getItem('cart'));
    const itemExist = cart.findIndex((cartItem) => cartItem.id === product.id) >= 0;
    if (itemExist) {
      return this.increaseQuantity(product);
    }
    return this.addNewItemToCart(product);
  }

  searchByTerm() {
    const { value } = document.querySelector('input');
    const id = getCategories()
      .then((json) => json.id);
    getProductsFromCategoryAndQuery(id, value)
      .then((json) => this.setState({
        products: json.results,
        search: true,
      }));
  }

  async listCategoryItens({ target: { id } }) {
    const { value } = document.querySelector('input');
    const query = await getProductsFromCategoryAndQuery(id, value);
    this.setState({ products: query.results });
  }

  addFirstItemToCart(product) {
    localStorage.setItem('cart', JSON.stringify([product]));
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.setState({ shoppingCart: cart });
  }

  increaseQuantity(product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        const { quantity } = item;
        const newQuantity = quantity + 1;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({ shoppingCart: newCart });
  }

  addNewItemToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({ shoppingCart: newCart });
  }

  render() {
    const { products, search, categories, shoppingCart } = this.state;
    return (
      <>
        <section>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            <img className={ style.cart } src={ CartIcon } alt="Carrinho de compras" />
          </Link>
          <span data-testid="shopping-cart-size">
            {shoppingCart.length > 0
              ? shoppingCart.reduce((acc, cv) => acc + cv.quantity, 0) : 0}
          </span>
        </section>
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
            onClick={ this.searchByTerm }
          >
            Busca
          </button>
          <br />
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
          {products && products.map((product) => (
            <ProductCard
              product={ product }
              addToCart={ this.handleAddToCart }
              key={ product.id }
            />
          ))}

          {search && products.length === 0 && <p>Nenhum produto encontrado</p>}
        </section>

        {/* Renderiza o card de produtos após clicar na categoria */}

        <section>
          <ul className={ style.list }>
            {categories && categories.map((category) => (
              <Link
                to="/"
                key={ category.id }
                className={ style.link }
                onClick={ this.listCategoryItens }
              >
                <li
                  data-testid="category"
                  id={ category.id }
                >
                  { category.name }
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default Home;
