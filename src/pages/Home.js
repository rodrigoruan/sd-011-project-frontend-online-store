import React from 'react';
import { Link } from 'react-router-dom';
import listProductTerms from 'listProductTerms';
import '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const search = await this.props.getProductsFromCategoryAndQuery('', this.state.value);
  }

  render() {
    return (

      <div>
        <form>
          <label>
            <input type="text" data-testid="query-input" value={ this.state.value } onChange={ this.handleChange } />
          </label>
          <input type="submit" data-testid="query-button" value="Enviar" onClick={ this.handleSubmit } />
        </form>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesBar />
      </div>
    );
  }
}

export default Home;
