import React from 'react';
import { Link } from 'react-router-dom';
import '../services/api';
import PropTypes from 'prop-types';
import CategoriesBar from '../components/CategoriesBar';
import ProductCard from '../components/productcard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      products: [],
      searched: false,
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderCards = this.renderCards.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { value, category } = this.state;
    const { getProductsFromCategoryAndQuery } = this.props;
    const search = await getProductsFromCategoryAndQuery(category, value);
    console.log(search.results);
    this.setState({ products: search.results, searched: true });
  }

  async handleButton({ target }) {
    this.setState({
      category: target.id,
    }, async () => {
      const { value, category } = this.state;
      const { getProductsFromCategoryAndQuery } = this.props;
      const search = await getProductsFromCategoryAndQuery(category, value);
      this.setState({ products: search.results, searched: true });
    });
  }

  renderCards() {
    const { products } = this.state;
    return products.map((product) => <ProductCard key={ product.id } { ...product } />);
  }

  render() {
    const { value, searched } = this.state;
    const { getCategories } = this.props;
    return (
      <div>
        <Link
          to="/Cart"
          data-testid="shopping-cart-button"
        >
          CART
        </Link>
        <form>
          <input
            type="text"
            data-testid="query-input"
            value={ value }
            onChange={ this.handleChange }
          />
          <input
            type="submit"
            data-testid="query-button"
            value="Enviar"
            onClick={ this.handleSubmit }
          />
        </form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesBar
          functionHome={ getCategories }
          filterCategory={ this.handleButton }
        />
        <div>
          {searched ? this.renderCards() : <span>Não houve pesquisa</span>}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getProductsFromCategoryAndQuery: PropTypes.func,
  getCategories: PropTypes.func,
}.isRequired;

export default Home;
