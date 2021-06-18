import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from './Input';
import Filtros from './Filtros';

class TopBar extends React.Component {
  render() {
    const { handleOnChange, totalCounter } = this.props;
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Input onClick={ handleOnChange } />
        <Filtros onClick={ handleOnChange } />
        <Link to="/ShoppingCart">
          <button data-testid="shopping-cart-button" type="button">
            Carrinho de Compras
          </button>
          <p data-testid="shopping-cart-size">{ totalCounter }</p>
        </Link>
      </div>
    );
  }
}

TopBar.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  totalCounter: PropTypes.number.isRequired,
};

export default TopBar;
