import React, { Component } from 'react';

export default class RenderComments extends Component {
  render() {
    const { comentario: { email, comment, rate } } = this.props;
    return (
      <div>
        <p>{ email }</p>
        <p>{ comment }</p>
        <p>{ rate }</p>
      </div>
    );
  }
}

RenderComments.propTypes = {
  comentario: PropTypes.shape({
    rate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    email: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
};
