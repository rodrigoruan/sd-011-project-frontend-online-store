import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Cards extends Component {
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
            >
              Ver detalhes
            </Link>
          </div>
        )) }
      </div>
    );
  }
}

Cards.propTypes = {
  resultSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
};
