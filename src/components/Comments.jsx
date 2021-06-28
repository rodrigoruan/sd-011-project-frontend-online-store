import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderComments from './RenderComments';
import './ProductDetails.css';

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
      <div className="form-avaliation">
        <h3>Escrever Avaliações</h3>
        <form className="form-comments">
          <div className="form-email">
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div className="text-area">
            <textarea
              type="text"
              onChange={ this.handleChange }
              placeholder="Mensagem(Opcional)"
              data-testid="product-detail-evaluation"
              name="comment"
            />
          </div>
          <div className="rating-submit">
            <div role="radiogroup" className="radio-group">
              <h4 className="product-class">Classifique o produto</h4>
              <span className="star-cb-group">
                <input type="radio" id="rating-5" name="rate" value="5" onChange={ this.handleChange } />
                {/* <input type="radio" id="rating-5" name="rate" value="5" checked="checked" onChange={ this.handleChange } /> */}
                <label htmlFor="rating-5">5</label>
                <input type="radio" id="rating-4" name="rate" value="4" onChange={ this.handleChange } />
                <label htmlFor="rating-4">4</label>
                <input type="radio" id="rating-3" name="rate" value="3" onChange={ this.handleChange } />
                <label htmlFor="rating-3">3</label>
                <input type="radio" id="rating-2" name="rate" value="2" onChange={ this.handleChange } />
                <label htmlFor="rating-2">2</label>
                <input type="radio" id="rating-1" name="rate" value="1"  onChange={ this.handleChange } />
                <label htmlFor="rating-1">1</label>
                <input type="radio" id="rating-0" name="rate" value="0" className="star-cb-clear" onChange={ this.handleChange } />
                <label htmlFor="rating-0">0</label>
              </span>
            </div>
            <div>
              <button
                type="button"
                aria-label="Save" // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
                data-testid="query-button"
                onClick={ this.saveNew }
                className="avaliate"
              >
                Avaliar
              </button>
            </div>
          </div>
        </form>
        <div className="avaliations">
          <h3>Avaliações do Produto</h3>
          {comments.map((value, index) => (
            <RenderComments
              key={ index }
              comentario={ value }
            />))}
        </div>

      </div>

    );
  }
}

Comments.propTypes = {
  id: PropTypes.string.isRequired,
};

// comments && comments.split('+').map((item, index) -> esse formato permite a renderização correta com a funsção saveComments
