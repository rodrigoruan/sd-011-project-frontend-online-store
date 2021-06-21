import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      allAvaliations: [],
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addAvaliationLocalStorage = () => {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title } = product;
    const { email, message } = this.state;
    localStorage.setItem(`Avaliation ${title}`, JSON.stringify({ email, message }));
  }

  getLocalStorage = () => {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title } = product;
    const avaliations = { ...localStorage };
    const value = Object.keys(avaliations).filter((avaliation) => avaliation === `Avaliation ${title}`);
    const arrayAvaliations = Object.values(value).map((avaliation) => JSON.parse(avaliation));
    this.setState({
      allAvaliations: arrayAvaliations,
    });
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title, price, thumbnail, attributes } = product;
    const { allAvaliations } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cartitems">
          Carrinho de compras
        </Link>
        <div>
          <h2 data-testid="product-detail-name">{`${title} - R$${price}`}</h2>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          <ul>
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                {`${attribute.name} - ${attribute.value_name}`}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/">Voltar</Link>
        <Button
          title={ product.title }
          thumbnail={ product.thumbnail }
          price={ product.price }
          dataTestid="product-detail-add-to-cart"
        />
        <form>
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={ this.handleChange }
          />
          <br />
          <textarea
            name="message"
            data-testid="product-detail-evaluation"
            type="text"
            placeholder="Mensagem(opcional)"
            onChange={ this.handleChange }
          />
          <br />
          <button
            onClick={ this.addAvaliationLocalStorage }
            type="button"
          >
            Avaliar
          </button>
        </form>
        <div>
          { allAvaliations.map((avaliation, index) => (
            <div key={ index }>
              <h3>{ avaliation.email }</h3>
              <span>{ avaliation.message }</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.objectOf({
    state: PropTypes.objectOf({
      product: PropTypes.objectOf({
        title: PropTypes.string,
        price: PropTypes.string,
        thumbnail: PropTypes.string,
        attributes: PropTypes.array,
      }),
    }),
  }).isRequired,
};
