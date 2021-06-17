import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comments extends Component {
  constructor() {
    super();
    this.addComent = this.addComent.bind(this);
  }

  addComent(key, email, msg) {
    return (
      <div key={ key }>
        <p>{ email }</p>
        <p>{ msg }</p>
      </div>
    );
  }

  render() {
    const { idPrd, arrayComment } = this.props;

    return (
      <div>
        { arrayComment.filter(({ idp }) => (idp === idPrd))
          .map(({ email, msg }, key) => this.addComent(key, email, msg)) }
      </div>
    );
  }
}

Comments.defaultProps = {
  idPrd: '',
};

Comments.propTypes = {
  idPrd: PropTypes.string,
  arrayComment: PropTypes.arrayOf(PropTypes.object).isRequired,
};
