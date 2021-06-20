import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductSearch.css';
import { Button } from 'semantic-ui-react';

export default class ProductSearch extends Component {
  render() {
    const { handleSubmit, onChange, value } = this.props;

    return (
      <div>
        <div className="ui icon input">
          <input
            data-testid="query-input"
            className="query-input ui icon input"
            name="searchProduct"
            type="text"
            value={ value }
            onChange={ onChange }
          />
          <i aria-hidden="true" class="search icon"></i>
        </div>
        <Button
          primary
          type="submit"
          onClick={ handleSubmit }
          data-testid="query-button"
        >
          Buscar
        </Button>
      </div>
    );
  }
}

ProductSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
