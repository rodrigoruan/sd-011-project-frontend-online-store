import React, { Component } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { click, change, value } = this.props;
    return (
      <div>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
          <FormControl
            name="query"
            type="text"
            data-testid="query-input"
            onChange={change}
            value={value}
          />
          <Button data-testid="query-button" onClick={click}>
            Pesquisar
          </Button>
        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  click: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
