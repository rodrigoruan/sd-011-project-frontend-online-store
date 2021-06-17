import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      avaliacoes: [],
      rating: '',
      commentary: '',
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.updateComments = this.updateComments.bind(this);
  }

  componentDidMount() {

  }

  handleChanges(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  updateComments() {
    // Quando o componemte montar vc tem que pensar em algo para atualizar todos os comentários que haviam sido feitos
    const { avaliacoes, rating, commentary } = this.state;
    const avaliacao = { rating, commentary };
    // console.log(avaliacao)
    this.setState({
      avaliacoes: [...avaliacoes, avaliacao],
      rating: '',
      commentary: '',
    });
  }

  render() {
    const { rating, commentary } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="rating">
            Avaliação:
            <input name="rating" type="number" max="5" min="1" required value={ rating } onChange={ this.handleChanges } />
          </label>
          <label htmlFor="comment">
            Deixe seu comentário:
            <textarea data-testid="product-detail-evaluation" name="commentary" value={ commentary } onChange={ this.handleChanges } />
          </label>
          <button type="button" onClick={ this.updateComments }>AVALIAR</button>
        </form>
        <div>
          <div>
            <h3>NOTA</h3>
            <p>Comentário do Usuário</p>
          </div>
          <div>
            <h3>NOTA</h3>
            <p>Comentário do Usuário</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
