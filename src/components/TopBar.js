import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from './Input';
import Filtros from './Filtros';

class TopBar extends React.Component {
  render() {
    const { handleOnChange } = this.props;
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Input onClick={ handleOnChange } />
        <Filtros onClick={ handleOnChange } />
        <Link to="/shopping-cart">
          <button data-testid="shopping-cart-button" type="button">
            Carrinho de Compras
          </button>
        </Link>
      </div>
    );
  }
}

TopBar.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
};

export default TopBar;
