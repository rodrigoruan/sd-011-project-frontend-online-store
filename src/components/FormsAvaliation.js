import React, { Component } from 'react';
import '../App.css';
import Comment from './Comment';
import CommentForm from './CommentForm';

class FormsAvaliation extends Component {
  constructor() {
    super();

    this.state = ({
      avaliations: [{
        avaliationId: 0,
        customerEmail: '',
        customerRating: null,
        customerCommentValue: '',
      }],
    });

    this.submitAvaliation = this.submitAvaliation.bind(this);
  }

  getComments() {
    const { avaliations } = this.state;
    return avaliations.map((avaliation, index) => (
      <Comment
        key={ index }
        avaliationId={ avaliation.avaliationId }
        customerEmail={ avaliation.customerEmail }
        customerRating={ avaliation.customerRating }
        customerCommentValue={ avaliation.customerCommentValue }
      />
    ));
  }

  getAvaliationTitle(countAvaliations) {
    countAvaliations -= 1;
    if (countAvaliations === 0 || countAvaliations === undefined) {
      return 'Sem avaliações!';
    }

    if (countAvaliations === 1) {
      return '1 avaliação';
    }

    if (countAvaliations >= 2) {
      return `${countAvaliations} avaliações`;
    }
  }

  submitAvaliation(customerEmail, customerRating, customerCommentValue) {
    const rgx = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
    const verificationEmail = rgx.test(String(customerEmail).toLowerCase());
    const { avaliations } = this.state;

    if (verificationEmail && customerRating !== null) {
      const avaliation = {
        avaliationId: avaliations.length + 1,
        customerEmail,
        customerRating,
        customerCommentValue,
      };

      this.setState({
        avaliations: avaliations.concat([avaliation]),
      });
    }
  }

  render() {
    const avaliations = this.getComments();
    return (
      <div>
        <h2>Avaliações</h2>
        <CommentForm submitAvaliation={ this.submitAvaliation } />
        <h3>Comentários</h3>
        <h4>
          {this.getAvaliationTitle(avaliations.length)}
          {avaliations}
        </h4>
      </div>
    );
  }
}

export default FormsAvaliation;
