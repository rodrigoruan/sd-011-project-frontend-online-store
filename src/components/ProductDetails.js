import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Rating from './Rating';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      nota: '',
      comentario: '',
    };
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleClickForm = this.handleClickForm.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(param) {
    param.qtdItems = 1;
    /* Se localStorage.cart estiver vazio, adicione o produto(param) em formato de string à chave cart */
    if (!localStorage.cart) localStorage.setItem('cart', JSON.stringify([param]));
    else {
      /* Senão estiver vazio, pegue o item do localStorage, transforma em objeto(parse), percorra ele para checar se o id se repete.  */
      const getFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
      const checkId = getFromLocalStorage.map((value) => value.id);
      const verifyId = checkId.indexOf(param.id);
      /* Caso o id não se repita(ou seja, retorne -1), adicione o novo objeto(param) à chave cart, senão adicione + 1 na quantidade do produto */
      if (verifyId < 0) {
        localStorage.setItem('cart', JSON.stringify([...getFromLocalStorage, param]));
      } else {
        getFromLocalStorage[verifyId].qtdItems += 1;
        localStorage.setItem('cart', JSON.stringify([...getFromLocalStorage]));
      }
    }
  }

  handleChangeForm({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClickForm() {
    /* Função feita com a ajuda do RRR = Rodrigo Ruan Regex */
    const { nome, nota, comentario } = this.state;
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title } = product;

    const novoComentario = { nome, nota, comentario };
    if (localStorage.getItem(title)) {
      const getComments = JSON.parse(localStorage.getItem(title));
      getComments.push(novoComentario);
      localStorage.setItem(title, JSON.stringify(getComments));
    } else {
      localStorage.setItem(title, JSON.stringify([novoComentario]));
    }
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title, thumbnail, price, attributes } = product;
    const comments = JSON.parse(localStorage.getItem(title));

    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <p>{`Preço: ${price} R$`}</p>
        <img src={ thumbnail } alt={ title } />
        {attributes.map((item, index) => <p key={ index }>{item.value_name}</p>)}
        <button
          type="submit"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.handlerSubmit(product) }
        >
          Adicionar ao Carrinho
        </button>
        <br />
        <Link to="/">Voltar</Link>
        <br />
        <Link
          data-testid="shopping-cart-button"
          to="/components/Cart"
        >
          Carrinho de compras
        </Link>
        <br />
        <div>
          <form>
            <div>
              Avaliações
            </div>
            <input
              onChange={ this.handleChangeForm }
              name="nome"
              type="text"
              placeholder="Digite seu nome"
            />
            <br />
            <input
              onChange={ this.handleChangeForm }
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
              name="comentario"
              type="text"
              data-testid="product-detail-evaluation"
              placeholder="Digite seu comentário(Opicional)"
            />
            <br />
            <button
              type="button"
              onClick={ this.handleClickForm }
            >
              Avaliar
            </button>
          </form>
          <ul>
            {comments && comments.map(({ nome, nota, comentario }, index) => (
              <li key={ index }>
                <p>{ nome }</p>
                <p>{ nota }</p>
                <p>{ comentario }</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        attributes: PropTypes.arrayOf(PropTypes.objectOf),
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
