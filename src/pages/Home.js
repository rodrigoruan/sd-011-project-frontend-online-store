import React from 'react';
// import { Link } from 'react-router-dom';
import '../services/api';
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
    const search = await
    this.props.getProductsFromCategoryAndQuery('$CATEGORY_ID', this.state.value);
    this.setState({ products: search });
    console.log(search);
  }

  async eventset() {
    const { products } = this.state;
    products.map(({ id, title, thumbnail, price }) => (
      <Productcard
        key={ id }
        title={ title }
        thumbnail={ thumbnail }
        price={ price }
      />));
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <form>
          <label>
            <input type="text" 
            data-testid="query-input" 
            value={ this.state.value } 
            onChange={ this.handleChange } />
          </label>
          <input type="submit" 
          data-testid="query-button" 
          value="Enviar" 
          onClick={ this.handleSubmit } />
        </form>
        <div>
          {products.map(({ id, title, thumbnail, price }) => (
            <Productcard
              key={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />))}
        </div>
        <div />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesBar functionHome={ this.props.getCategories } />
      </div>
    );
  }
}

export default Home;
