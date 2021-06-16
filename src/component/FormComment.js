import React, { Component } from 'react';

export default class FormComment extends Component {
  constructor({ id }) {
    super(id);
    this.state = {
      id,
      email: '',
      msg: '',
    };
    this.handleclick = this.handleclick.bind(this);
    this.handlkeChange = this.handlkeChange.bind(this);
  }

  handleclick() {
    const { email, msg } = this.state;
    const newObj = { email, msg };
    console.log(newObj);
  }

  handlkeChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, msg } = this.state;
    console.log(this.props);
    return (
      <form>
        <input name="email" type="text" value={ email } onChange={ this.handlkeChange } />
        <input name="msg" type="text" value={ msg } onChange={ this.handlkeChange } />
        <button type="button" onClick={ this.handleclick }>Avaliar</button>
      </form>
    );
  }
}
