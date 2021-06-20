import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavHome extends React.Component {
  render() {
    return (
      <div className="navHome">
        <h1> Trybe Oline Store </h1>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/"> Home </Link></Nav.Link>
        </Nav>
      </div>
    );
  }
}
