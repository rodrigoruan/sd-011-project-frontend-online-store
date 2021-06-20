import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export default class Forms extends Component {
  render() {
    return (
      <div>
        <form controlId="formBasicEmail" className="forms">
          <h1>Avalie este produto!</h1>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Seu Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite Seu Nome!" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Seu Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Nota Para o Produto</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Seu Comentário</Form.Label>
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
      </div>
    );
  }
}
