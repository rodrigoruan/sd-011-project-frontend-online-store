import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from './Input';
import Filtros from './Filtros';

class TopBar extends React.Component {
  render() {
    const { handleOnChange, totalCounter } = this.props;
    return (
      <div className="div-searchbar">
        <div className="btns-div-search">
          <Link to="/">
            <button type="button" className="btn-cart">
              <img alt="home" src="https://img.icons8.com/small/39/ffffff/home-page.png" />
            </button>
          </Link>
          <Link to="/ShoppingCart">
            <button data-testid="shopping-cart-button" type="button" className="btn-cart">
              <img alt="cart" src="https://img.icons8.com/small/32/ffffff/shopping-cart-loaded.png" />
              <p data-testid="shopping-cart-size" className="noDecor">{ totalCounter }</p>
            </button>
          </Link>
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Input onClick={ handleOnChange } />
        <Filtros onClick={ handleOnChange } />
      </div>
    );
  }
}

TopBar.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  totalCounter: PropTypes.number.isRequired,
};

export default TopBar;
