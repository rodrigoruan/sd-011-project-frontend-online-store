import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Picture from '../img/shopping-cart.png';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      products: null,
      categories: null,
      search: false,
      selectedProduct: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickLi = this.handleClickLi.bind(this);
    this.sendProductDetails = this.sendProductDetails.bind(this);
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

  async sendProductDetails({ target: { id } }) {
    const { selectedProduct } = this.state;
    const product = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const json = await product.json();
    const response = {
      thumbnail: json.thumbnail,
      title: json.title,
      price: json.price,
      id: json.id,
      quantity: 1,
    };
    let initial = false;
    console.log(response.id);
    if (selectedProduct.length === 0) {
      selectedProduct.push(response);
      console.log(selectedProduct);
      initial = true;
    }
    if (selectedProduct.length > 0 && initial === false) {
      let equal = false;
      for (let index = 0; index < selectedProduct.length; index += 1) {
        if (selectedProduct[index].id === response.id) {
          selectedProduct[index].quantity += 1;
          equal = true;
          console.log(selectedProduct);
          return (selectedProduct, equal);
        }
      }
      if (equal === false) {
        selectedProduct.push(response);
        console.log(selectedProduct);
      }
    }
    this.setState(selectedProduct);
  }

  render() {
    const { products, search, selectedProduct } = this.state;
    const { categories } = this.state;
    return (
      <>
        {/* Renderiza o card de produtos após clicar no botão */}
        <section className={ style.inputContent }>
          <Link
            to={ { pathname: '/cart', product: selectedProduct } }
            data-testid="shopping-cart-button"
          >
            <img className={ style.cart } src={ Picture } alt="Carrinho de compras" />
          </Link>
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
            <div key={ product.id }>
              <Link
                className="product"
                to="/product/:id"
                key={ product.id }
                data-testid="product"
              >
                <img src={ product.thumbnail } alt="foto-produto" />
                <h2>{product.title}</h2>
                <p>{product.price}</p>
              </Link>
              <button
                type="button"
                data-testid="product-add-to-cart"
                id={ product.id }
                onClick={ this.sendProductDetails }
              >
                Adicionar ao carrinho
              </button>
            </div>
          ))}
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
