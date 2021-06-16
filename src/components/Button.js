import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };

    this.handleClick = this.handleClick.bind(this);
    this.getCategoryAndQuery = this.getCategoryAndQuery.bind(this);
  }

  handleClick() {
    this.getCategoryAndQuery();
  }

  async getCategoryAndQuery() {
    const { value } = this.props;
    const getApi = await getProductsFromCategoryAndQuery('', value);
    this.setState({
      products: getApi.results,
      loading: false,
    });
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        {!loading && products.map((e, index) => (
          <div data-testid="product" key={ index }>
            <p>{ e.title }</p>
            <img src={ e.thumbnail } alt={ e.title } />
            <p>{ e.price }</p>
          </div>
        ))}
      </div>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
