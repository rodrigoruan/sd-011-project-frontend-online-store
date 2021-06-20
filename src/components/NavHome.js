import React from 'react';
import { Nav, Form, Button, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class NavHome extends React.Component {
  render() {
    const { filterProducts, getProducts } = this.props;
    return (
      <div className="navHome">
        <h1> Trybe Oline Store </h1>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/"> Home </Link></Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            id="initialMessage"
            onChange={ filterProducts }
          />
          <Button
            variant="secondary"
            data-testid="query-button"
            type="button"
            onClick={ getProducts }
          >
            Pesquisar
          </Button>
          <Button variant="outline-info">Search</Button>
        </Form>
      </div>
    );
  }
}

NavHome.propTypes = {
  filterProducts: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
};
