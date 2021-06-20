import React from 'react';
import { Form } from 'react-bootstrap';
import NavHome from './NavHome';

class Purchase extends React.Component {
  render() {
    const loading = true;
    return (
      <>
        <NavHome loading={ loading } />
        <div className="forms">
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Seu Nome</Form.Label>
              <Form.Control
                type="string"
                data-testid="checkout-fullname"
                placeholder="Nome Completo"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Seu Email</Form.Label>
              <Form.Control
                type="string"
                data-testid="checkout-email"
                placeholder="Seu Email"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Seu CPF</Form.Label>
              <Form.Control
                type="string"
                data-testid="checkout-cpf"
                placeholder="Seu CPF"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Seu Numero de telefone</Form.Label>
              <Form.Control
                type="string"
                data-testid="checkout-phone"
                placeholder="Seu Numero de telefone"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Seu CEP</Form.Label>
              <Form.Control
                type="string"
                data-testid="checkout-cep"
                placeholder="Seu CEP"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Seu Email</Form.Label>
              <Form.Control
                type="string"
                data-testid="checkout-address"
                placeholder="Seu Endereço"
              />
            </Form.Group>
          </Form>
        </div>
      </>
    );
  }
}

export default Purchase;
