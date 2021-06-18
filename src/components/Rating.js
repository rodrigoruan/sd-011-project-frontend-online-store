import React, { Component } from 'react';

class Rating extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        nome: '',
        nota: '',
        comentario: '',
      },
    };
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChangeForm({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { form } = this.state;
    const result = Object.values(form);
    return (
      <div>
        <form onChange={ this.handleChangeForm }>
          <div>
            Avaliações
          </div>
          <input
            onChange={ this.handleChangeForm }
            value={ form.nome }
            name="nome"
            type="text"
            placeholder="Digite seu nome"
          />
          <br />
          <input
            onChange={ this.handleChangeForm }
            value={ form.nota }
            name="nota"
            type="number"
            required
            min="1"
            max="5"
            placeholder="Avalie o produto de 1 a 5"
          />
          <br />
          <textarea
            onChange={ this.handleChangeForm }
            value={ form.comentario }
            name="comentario"
            type="text"
            data-testid="product-detail-evaluation"
            placeholder="Digite seu comentário(Opicional)"
          />
          <br />
          <button type="submit"> Avaliar </button>
        </form>
        <ul>
          {result.map(({ nome, nota, comentario }) => (
            <li key="">
              <p>{nome}</p>
              <p>{nota}</p>
              <p>{comentario}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Rating;
