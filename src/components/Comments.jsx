import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderComments from './RenderComments';

export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      comment: '',
      rate: '',
      /* comments: null, // com a primeira função Save precisa ser null, o array quebra */
      comments: [], // com a primeira função Save precisa ser null, o array quebra

    };
    /* this.saveComments = this.saveComments.bind(this); */
    this.handleChange = this.handleChange.bind(this);
    this.saveComments2 = this.saveComments2.bind(this);
    this.saveNew = this.saveNew.bind(this);
    this.handleComments = this.handleComments.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.handleComments(id);
    //  this.saveComments2();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  /*   saveComments() {
    const { comment, rate } = this.state;
    const object = { comment, rate }; // cria o objeto que será guardado no localStorage
    const { id } = this.props;
    if (rate) { // identifica que há avaliação
      const getItem = localStorage.getItem(id); // busca o item id
      if (getItem) { // se há o id no localStorage
        localStorage.setItem(id, `${getItem}+${JSON.stringify(object)}`); // set a chave id com o valor buscado (getItem), acrescentando o objeto em formato de string, pois o localStorage só aceita texto
      }
      if (!getItem && rate !== 0) { // se o localStorage estiver vazio e o rate foi diferente de 0, set o objeto
        localStorage.setItem(id, JSON.stringify(object));
      }
    }
    this.setState({ comments: localStorage.getItem(id) }); // atualiza o estado com os comentários salvos no localStorage
  } */

  handleComments(id) {
    if (localStorage[id]) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(id)),
      });
    }
  }

  saveComments2() { // essa função adiciona o objeto corretamente no localStorage, mas não consegui incluir o map corretamente na página (adiciona apenas no segundo clique e atrasado)
    const { comment, rate } = this.state;
    const { id } = this.props;
    const object = { comment, rate };
    if (rate === 0) {
      console.log('Não há avaliação');
    } else {
      const getItem = localStorage.getItem(id);
      if (!getItem) {
        localStorage.setItem(id, JSON.stringify([object]));
      } else {
        const received = JSON.parse(getItem);
        localStorage.setItem(id, JSON.stringify([...received, object]));
        this.setState({ comments: received }); // setState no escopo do else recebe
      }
    }
  }

  saveNew() {
    const object = {};
    const { email, comment, rate } = this.state;
    const { id } = this.props;

    if (rate === '') {
      console.log('Não há avaliação');
    } else {
      object.email = email;
      object.comment = comment;
      object.rate = rate;
      if (!localStorage[id]) {
        localStorage.setItem(id, JSON.stringify([object]));
      } else {
        const previousComments = JSON.parse(localStorage.getItem(id));
        console.log(previousComments);
        localStorage.setItem(id, JSON.stringify([...previousComments, object]));
      }
      this.handleComments(id);
    }
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <h3>Escrever Avaliações</h3>
        <fieldset>
          <div>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <textarea
              type="text"
              onChange={ this.handleChange }
              placeholder="Mensagem(Opcional)"
              data-testid="product-detail-evaluation"
              name="comment"
            />
          </div>
          <div role="radiogroup">
            <span>
              <input
                value="1"
                name="rate"
                type="radio"
                onChange={ this.handleChange }
              />
              <input
                value="2"
                name="rate"
                type="radio"
                onChange={ this.handleChange }
              />
              <input
                value="3"
                name="rate"
                type="radio"
                onChange={ this.handleChange }
              />
              <input
                value="4"
                name="rate"
                type="radio"
                onChange={ this.handleChange }
              />
              <input
                value="5"
                name="rate"
                type="radio"
                onChange={ this.handleChange }
              />
            </span>
          </div>
          <div>
            <button
              type="button"
              aria-label="Save" // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
              data-testid="query-button"
              onClick={ this.saveNew }
            >
              Avaliar
            </button>
          </div>
          <div>
            <h4>Avaliações</h4>
            {comments.map((value, index) => (
              <RenderComments
                key={ index }
                comentario={ value }
              />))}
          </div>

        </fieldset>
      </div>
    );
  }
}

Comments.propTypes = {
  id: PropTypes.string.isRequired,
};

// comments && comments.split('+').map((item, index) -> esse formato permite a renderização correta com a funsção saveComments
