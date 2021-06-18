import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      comment: '',
      stars: '',
      allComments: null,
      sum: 0,
    };
  }

  componentDidMount() {
    this.changeState();
    this.saveCommentOnLocal();
    this.sumCartItems();
  }

  setComments = ({ target: { value, name } }) => this.setState({ [name]: value });

  saveCommentOnLocal = () => {
    const { location: { state: { id } } } = this.props;
    const { comment, stars } = this.state;

    if (stars) {
      const object = { comment, stars };
      const prevStorage = localStorage.getItem(id);

      if (prevStorage) {
        localStorage.setItem(id, `${prevStorage}*${JSON.stringify(object)}`);
      }
      if (prevStorage === null && stars !== 'Avaliar') {
        localStorage.setItem(id, JSON.stringify(object));
      }
    }

    this.setState({ allComments: localStorage.getItem(id) });
  };

  changeState = () => {
    const { location: { state } } = this.props;
    const { title } = state;

    const local = JSON.parse(localStorage.getItem(title));
    if (local) {
      this.setState({ counter: local.counter + 1 });
    }
  };

  handleClick = () => {
    const { location: { state } } = this.props;
    const { location: { state: { title } } } = this.props;
    const { counter } = this.state;
    const local = JSON.parse(localStorage.getItem(title));

    this.setState((previous) => ({ counter: previous.counter + 1 }));

    if (local) {
      local.counter = counter;
      localStorage.setItem(title, JSON.stringify(local));
    } else {
      const object = { ...state, counter };
      localStorage.setItem(title, JSON.stringify(object));
    }

    this.sumCartItems();
  };

  sumCartItems = () => {
    const objeto = { ...localStorage };
    const objJson = Object.values(objeto).map((e) => JSON.parse(e));
    const total = objJson.reduce((acc, curr) => acc + curr.counter, 0);
    this.setState({ sum: total });
  };

  render() {
    const { props, state } = this;
    const {
      location: {
        state: { title, price, thumbnail, attributes, id, shipping, availableQuantity },
      },
    } = props;
    const { allComments, sum, counter } = state;

    return (
      <>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        {shipping.free_shipping ? (<p data-testid="free-shipping">Frete Grátis!</p>
        ) : null}
        <p>
          R$
          {price}
        </p>
        <div>
          <ul>
            {attributes && attributes
              .map(({ name }, index) => <li key={ index }>{name}</li>)}
          </ul>
        </div>
        <button
          disabled={ counter > availableQuantity }
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
          type="button"
        >
          Adicionar ao Carrinho
        </button>
        <Link data-testid="shopping-cart-button" to="/cart">
          Carrinho
        </Link>
        <span data-testid="shopping-cart-size">{sum}</span>
        <div>
          <textarea
            name="comment"
            onChange={ this.setComments }
            data-testid="product-detail-evaluation"
            type="text"
          />
          <select name="stars" onChange={ this.setComments }>
            <option>Avaliar</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button name={ id } type="button" onClick={ this.saveCommentOnLocal }>
            Enviar comentário
          </button>
        </div>
        <div>
          <h4>Avaliações</h4>
          {allComments && allComments.split('*').map((item, index) => {
            const { comment, stars } = JSON.parse(item);
            return (
              <div key={ index }>
                <p>{comment}</p>
                <p>
                  STARS:
                  {stars}
                </p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

Product.propTypes = {
  location: PropTypes.shape({
    state: {
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      attributes: PropTypes.arrayOf(PropTypes.object),
      free_shipping: PropTypes.bool,
      sum: PropTypes.number,
    },
  }).isRequired,
};
