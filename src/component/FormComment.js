import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormComment extends Component {
  constructor() {
    super();
    this.state = {
      idp: '',
      email: '',
      msg: '',
    };
    this.handlkeChange = this.handlkeChange.bind(this);
  }

  handlkeChange({ target }) {
    const { name, value } = target;
    const { idPrd } = this.props;
    this.setState({
      idp: idPrd,
      [name]: value,
    });
  }

  render() {
    const { email, msg } = this.state;
    const { evBtn } = this.props;
    return (
      <form>
        <input
          name="email"
          type="text"
          value={ email }
          onChange={ this.handlkeChange }
        />
        <input
          data-testid="product-detail-evaluation"
          name="msg"
          type="text"
          value={ msg }
          onChange={ this.handlkeChange }
        />
        <button type="button" onClick={ () => evBtn(this.state) }>Avaliar</button>
      </form>
    );
  }
}

FormComment.defaultProps = {
  idPrd: '',
};

FormComment.propTypes = {
  idPrd: PropTypes.string,
  evBtn: PropTypes.func.isRequired,
};
