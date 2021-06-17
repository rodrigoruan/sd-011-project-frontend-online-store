import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AvaliationForm from './AvaliationForm';
import Avaliations from './Avaliations';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avaliation: [],
    };
    this.getForm = this.getForm.bind(this);
  }
  // componentDidMount() {
  // }

  getForm(state, id) {
    this.setState({
      avaliation: [...state, id],
    });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <h1>PRODUTO</h1>
        <AvaliationForm
          getForm={ this.getForm }
          id={ id }
        />
        <Avaliations />
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
