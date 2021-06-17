import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Cards extends Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(id, title) {
    const obj = { id, title };
    const { addItems } = this.props;
    console.log(obj);
    addItems(obj);
  }

  render() {
    const { resultSearch } = this.props;
    return (
      <div className="cards">
        { resultSearch.map(({ id, title }) => (
          <div data-testid="product" key={ id }>
            <p>{ title }</p>
            <Link
              to={ `/product/${id}` }
              data-testid="product-detail-link"
              staticContext={ resultSearch }
            >
              Ver detalhes
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => this.handleAdd(id, title) }
            >
              Adicionar
            </button>
          </div>
        )) }
      </div>
    );
  }
}

Cards.propTypes = {
  resultSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItems: PropTypes.func.isRequired,
};
