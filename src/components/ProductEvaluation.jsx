import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductEvaluation extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    const { email, textArea, rating } = this.state;
    return (
      <div>
        <p>{ email }</p>
        <p>{ rating }</p>
        <p>{ textArea }</p>
      </div>
    );
  }
}
