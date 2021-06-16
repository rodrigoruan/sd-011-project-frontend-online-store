import React from 'react';
// import { Link } from 'react-router-dom';
import '../services/api';
import PropTypes from 'prop-types';
import CategoriesBar from '../CategoriesBar';
import Productcard from '../components/productcard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      products: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    const {getProductsFromCategoryAndQuery} = this.props;
    const search = await
    getProductsFromCategoryAndQuery('$CATEGORY_ID', value);
    this.setState({ products: search });
    console.log(search);
  }

  render() {
    const { products } = this.state;
    const { value } = this.state;
    const { getCategories } = this.props;
    return (
      <div>
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
        <div>
          {products
            .map(({ ...props }, index) => <Productcard key={ index } { ...props } />)}
        </div>
        <div />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesBar functionHome={ getCategories } />
      </div>
    );
  }
}

Home.propTypes = {
  getProductsFromCategoryAndQuery: PropTypes.string,
  getCategories: PropTypes.string,
}.isRequired;

export default Home;
