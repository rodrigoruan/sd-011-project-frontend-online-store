import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListCards from '../components/ListCards';

export default class Home extends Component {
  constructor() {
    super();

    this.listProducts = this.listProducts.bind(this);
  }

  listProducts() {
    const { state } = this.props;
    return <ListCards { ...state } />;
  }

  render() {
    return (
      <div>
        { this.listProducts() }
      </div>
    );
  }
}

Home.propTypes = {
  state: PropTypes.shape({
    query: PropTypes.string,
    category: PropTypes.string,
    products: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};
