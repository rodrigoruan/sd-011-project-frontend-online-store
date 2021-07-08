import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoriesList from '../components/CategoriesList';
import Products from '../components/Products';
import Header from '../components/Header';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputSearch: '',
      products: [],
    };
    this.selectCategory = this.selectCategory.bind(this);
    this.searchFunction = this.searchFunction.bind(this);
  }

  handleInput = ({ target: { value } }) => {
    this.setState({
      inputSearch: value,
    });
  }

  handleProductsByQuery = (event) => {
    event.preventDefault();
    const { inputSearch } = this.state;
    this.searchFunction('', inputSearch);
  }

  searchFunction(id = '', text = '') {
    getProductsFromCategoryAndQuery(id, text).then(({ results: products }) => {
      this.setState({
        products,
      });
    });
  }

  selectCategory({ target }) {
    const dataCategoryId = target.getAttribute('data-category-id');
    this.searchFunction(dataCategoryId, '');
  }

  render() {
    const { inputSearch, products } = this.state;
    const { addItemToCart, totalItemQty } = this.props;

    return (
      <section className="container-home">
        <CategoriesList onClick={ this.selectCategory } />
        <section className="container-search-products">
          <Header
            handleInput={ this.handleInput }
            handleProductsByQuery={ this.handleProductsByQuery }
            inputSearch={ inputSearch }
            totalItemQty={ totalItemQty }
          />
          <main>
            <Products products={ products } addItemToCart={ addItemToCart } />
          </main>
        </section>
      </section>
    );
  }
}

Home.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
  totalItemQty: PropTypes.number.isRequired,
};

export default Home;
