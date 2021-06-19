import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import Comments from './Comments';

export default class Forms extends Component {
  constructor() {
    super();
    this.state = {
      comment: [],
    };
    this.addComment = this.addComment.bind(this);
    this.sortComment = this.sortComment.bind(this);
  }

  addComment({ target }) {
    const { idProduct } = this.props;
    console.log(idProduct);
    const teste = target.parentElement.children;
    const commentForState = {
      email: teste[0].firstChild.value,
      rating: parseFloat(teste[1].firstChild.value),
      comment: teste[2].firstChild.value,
    };

    this.setState((prevValue) => ({
      comment: [...prevValue.comment, commentForState],
    }));

    const { comment } = this.state;
    localStorage.setItem(JSON.stringify(idProduct), JSON.stringify(comment));
  }

  sortComment() {
    const { comment } = this.state;
    const sortComments = {
      firstComment: -1,
      lastComment: 1,
      midComment: 0,
    };
    const { firstComment, lastComment, midComment } = sortComments;
    comment.sort((a, b) => {
      if (a.rating > b.rating) {
        return firstComment;
      }
      if (a.rating < b.rating) {
        return lastComment;
      }
      return midComment;
    });
  }

  render() {
    const { comment } = this.state;
    const { idProduct } = this.props;
    return (
      <div>
        <form controlId="formBasicEmail">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as="textarea"
              rows={ 3 }
              data-testid="product-detail-evaluation"
            />
          </Form.Group>
          <Button
            variant="success"
            type="button"
            onClick={ this.addComment }
          >
            Avaliar
          </Button>
        </form>
        { this.sortComment() }
        { comment.map((commentForComponent) => (<Comments
          commentForComponent={ commentForComponent }
          key={ `${commentForComponent.email}: ${idProduct}` }
        />)) }
      </div>
    );
  }
}

Forms.propTypes = {
  idProduct: PropTypes.string.isRequired,
};
