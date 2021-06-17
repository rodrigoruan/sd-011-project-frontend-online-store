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
    };
  }

  componentDidMount() {
    this.saveCommentOnLocal();
  }

  setComments = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

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
  }

  handleClick = () => {
    this.setState((previous) => ({
      counter: previous.counter + 1,
    }));
    const { counter } = this.state;
    const {
      location: { state },
    } = this.props;
    const { title, id, price, thumbnail, attributes } = state;
    const object = { counter, price, thumbnail, id, attributes, title };
    const json = JSON.stringify(object);
    localStorage.setItem(title, json);
  };

  render() {
    const {
      location: {
        state: { title, price, thumbnail, attributes, id },
      },
    } = this.props;

    const { allComments } = this.state;
    return (
      <>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          {price}
        </p>
        <div>
          <ul>
            {attributes
              && attributes.map(({ name }, index) => <li key={ index }>{name}</li>)}
          </ul>
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
          type="button"
        >
          Adicionar ao Carrinho
        </button>
        <Link data-testid="shopping-cart-button" to="/cart">
          Carrinho
        </Link>
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
                <p>
                  {comment}
                </p>
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
    },
  }).isRequired,
};
