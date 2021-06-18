import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AvaliationForm from './AvaliationForm';
import Avaliations from './Avaliations';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avaliationsArray: [],
    };
    this.getForm = this.getForm.bind(this);
  }

  getForm(obj) {
    this.setState((state) => ({
      avaliationsArray: [...state.avaliationsArray, obj],
    }));
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { avaliationsArray } = this.state;
    return (
      <div>
        <h1>PRODUTO</h1>
        <AvaliationForm
          getForm={ this.getForm }
          productId={ id }
        />
        <Avaliations
          productId={ id }
          avaliationsArray={ avaliationsArray }
        />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
